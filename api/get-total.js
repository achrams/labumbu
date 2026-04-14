export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwYJb6H6HXTr8ih-uJJZAKz0ADUWP-5Wn0kiZ9hexw2rrIp09ceMM9BdOOjBc0ro0o4/exec",
    );
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
