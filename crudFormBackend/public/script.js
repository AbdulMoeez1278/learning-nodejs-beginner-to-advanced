const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const userIdField = document.createElement("input");
const submitBtn = document.getElementById("submitBtn");

// Fetch all users from API
async function fetchUsers() {
  try {
    const res = await fetch("/api/users");
    const users = await res.json();

    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = "";

    if (users.length === 0) {
      userTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center text-muted">No users found</td>
        </tr>
      `;
      return;
    }

    users.forEach((user, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age || "N/A"}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-warning me-2" onclick="editUser('${
            user._id
          }')">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteUser('${
            user._id
          }')">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      `;
      userTableBody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Initial fetch when page loads
fetchUsers();

// user form
userIdField.type = "hidden";
userIdField.id = "userId";
userForm.appendChild(userIdField);

userForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const userId = document.getElementById("userId").value;

  // Check whether we're adding or updating
  const isEditing = userId !== "";

  const userData = { name, email, age };

  try {
    let res;
    if (isEditing) {
      // Update user
      res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      submitBtn.textContent = "Add User"; // Reset button
    } else {
      // Add new user
      res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    }

    if (!res.ok) throw new Error("Failed to save user");

    // Clear form
    userForm.reset();
    document.getElementById("userId").value = "";

    // Refresh user table
    fetchUsers();
  } catch (error) {
    console.error("Error saving user:", error);
  }
});

// Edit function
async function editUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch user. Status: ${res.status}`);
    }

    const user = await res.json();

    // Debug: log user to verify data
    // console.log("Editing user:", user);

    if (!user || !user._id) {
      alert("User not found or invalid data.");
      return;
    }

    // Fill form fields
    document.getElementById("userId").value = user._id;
    document.getElementById("name").value = user.name || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("age").value = user.age || "";
  } catch (error) {
    console.error("Error loading user for edit:", error);
    alert("Failed to load user for editing. Check console for details.");
  }
}

// Delete User
async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  try {
    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("User deleted successfully!");
      fetchUsers();
    } else {
      alert("Failed to delete user.");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
