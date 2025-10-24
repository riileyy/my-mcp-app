// pages/api/mcp-connect.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { clientId, clientSecret } = req.body;
  
  if (!clientId || !clientSecret)
    return res.status(400).json({ error: "Missing credentials" });

  // 예시: NAVER API 호출
  const response = await fetch("https://openapi.naver.com/v1/search/blog?query=테스트", {
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret
    }
  });
  const data = await response.json();
  return res.status(200).json(data);
}
