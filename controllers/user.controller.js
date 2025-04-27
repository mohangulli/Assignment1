import User from "../models/user.model.js"; 


export const deleteUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (user.role === "admin") {
      return res.status(403).json({ message: "Cannot delete an admin by admin or user" });
    }

    
    await User.findOneAndDelete({ username });

    return res.status(200).json({ message: `${username} deleted from data base` });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
