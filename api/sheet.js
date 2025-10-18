export default async function handler(req, res) {
  const sheetId = '1xQT8o8ZlNr1p3GBhfIQLZK7kMpxWzs41baPUr1Z8c4E';
  const sheetName = 'Sheet1';
  const apiKey = 'AIzaSyCA4tdg8MbifZgZLkNtQxKeBpK3qvVhpm4';

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // Cho phép mọi thiết bị truy cập (TV, điện thoại, trình duyệt)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
