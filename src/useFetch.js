import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialPath) {
  // 상태 관리 로직
  const [data, setData] = useState(null);

  // API 호출 함수 로직
  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  // API 호출 로직
  useEffect(() => {
    fetchUrl(initialPath);
  }, []);

  return { data, fetchUrl };
}
