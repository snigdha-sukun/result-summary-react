import { useEffect, useState } from "react";
import type { MarksData } from "../../types";

const useFetchMarks = () => {
    const url = "/data.json";
	const [marks, setMarks] = useState<MarksData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMarks = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const result = await response.json();
				setMarks(result);
			} catch (error) {
				setError(error instanceof Error ? error.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		fetchMarks();
	}, []);

	return { marks, loading, error };
};

export default useFetchMarks;