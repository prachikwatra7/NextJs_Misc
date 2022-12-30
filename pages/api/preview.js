export default function hadler(req, res) {
  res.setPreviewData({ user: "prachi" });
  // res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
