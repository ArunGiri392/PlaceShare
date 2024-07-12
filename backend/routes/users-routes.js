


router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const user = DUMMY_USERS.find(u => {
    return u.id === userId;
  })
  res.json({ user });
});
