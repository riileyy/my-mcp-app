// pages/api/naver-search.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST 요청만 허용됩니다." });
  }

  const { clientId, clientSecret, query } = req.body;
  if (!clientId || !clientSecret) {
    return res.status(400).json({ error: "NAVER Client ID와 Secret이 필요합니다." });
  }

  try {
    const response = await fetch(
      `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query || "테스트")}`,
      {
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
