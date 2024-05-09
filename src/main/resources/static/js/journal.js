document.addEventListener("DOMContentLoaded", function () {
  const journalForm = document.getElementById("journalForm");
  const journalsContainer = document.getElementById("journalsContainer");

  // Function to fetch all journals and display them
  function fetchAndDisplayJournals() {
    fetch("/journals")
      .then((response) => response.json())
      .then((journals) => {
        journalsContainer.innerHTML = "";
        journals.forEach((journal) => {
          const journalElement = createJournalElement(journal);
          journalsContainer.appendChild(journalElement);
        });
      });
  }

  // Function to create journal element
  function createJournalElement(journal) {
    const journalElement = document.createElement("div");
    journalElement.classList.add("journal");

    // Convert date to a simple format
    const simpleDate = new Date(journal.date).toLocaleDateString();

    journalElement.innerHTML = `
        <h3>${journal.title}</h3>
        <p>${journal.entry}</p>
        <p>Date: ${simpleDate}</p>
        <button class="editButton" data-id="${journal.id}">
        edit</button>
        <button class="deleteButton" data-id="${journal.id}">
        delete</button>
    `;
    return journalElement;
  }

  // Function to handle delete button click
  function handleDeleteButtonClick(journalId) {
    if (confirm("Are you sure you want to delete this journal entry?")) {
      fetch(`/journals/${journalId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            fetchAndDisplayJournals();
          } else {
            throw new Error("Failed to delete journal entry");
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    }
  }

  // Function to show a confirmation dialog box
  function showConfirmationDialog(message, callback) {
    const confirmed = confirm(message);
    if (confirmed) {
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  // Event delegation to handle edit and delete button clicks
  journalsContainer.addEventListener("click", function (event) {
    const targetButton = event.target;
    if (targetButton.classList.contains("editButton")) {
      handleEditButtonClick(targetButton.dataset.id);
    } else if (targetButton.classList.contains("deleteButton")) {
      handleDeleteButtonClick(targetButton.dataset.id);
    }
  });

  // Function to handle edit button click
  function handleEditButtonClick(journalId) {
    fetch(`/journals/${journalId}`)
      .then((response) => response.json())
      .then((journal) => {
        // Pre-fill the form with journal data for editing
        document.getElementById("titleInput").value = journal.title;
        document.getElementById("entryInput").value = journal.entry;
        document.getElementById("dateInput").value = journal.date;

        // Change form action to update mode
        journalForm.setAttribute("data-action", "update");
        journalForm.setAttribute("data-id", journal.id);
        document.querySelector('button[type="submit"]').textContent = "Update";
      });
  }

  // Event listener for form submission
  journalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("titleInput").value;
    const entry = document.getElementById("entryInput").value;
    const date = document.getElementById("dateInput").value;

    const formData = {
      title,
      entry,
      date,
    };

    const action = journalForm.getAttribute("data-action");
    let url = "/journals";
    let method = "POST";
    if (action === "update") {
      const journalId = journalForm.getAttribute("data-id");
      url = `/journals/${journalId}`;
      method = "PUT";
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to update journal");
      })
      .then((journal) => {
        if (action === "update") {
          // Show confirmation dialog
          showConfirmationDialog(
            "Journal entry updated successfully. Please refresh the page to see the changes.",
            function () {
              location.reload();
            }
          );
        } else {
          // Add new journal to the UI
          const newJournalElement = createJournalElement(journal);
          journalsContainer.appendChild(newJournalElement);
        }
        journalForm.reset();
        journalForm.removeAttribute("data-action");
        document.querySelector('button[type="submit"]').textContent =
          "Add";
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });

  // Initial fetch and display journals
  fetchAndDisplayJournals();
});
