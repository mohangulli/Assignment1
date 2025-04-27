const isAdmin = (req, res, next) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
      }
      next();
    } catch (error) {
      console.error("Error in isAdmin middleware:", error);
      res.status(500).json({ message: "Server error." });
    }
  };
  
  export default isAdmin;
  