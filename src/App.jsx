import { useEffect, useMemo, useState } from "react";

export default function App() {
	const palette = {
		black: "#0a0908",
		jetBlack: "#22333b",
		whiteSmoke: "#f2f4f3",
		moltenOrange: "#f14f04",
	};

	const [theme, setTheme] = useState("light");
	const darkMode = theme === "dark";

	useEffect(() => {
		document.documentElement.style.colorScheme = darkMode
			? "dark"
			: "light";
		document.documentElement.style.background = darkMode
			? palette.black
			: palette.whiteSmoke;
		document.body.style.margin = "0";
		document.body.style.minHeight = "100vh";
		document.body.style.background = darkMode
			? palette.black
			: palette.whiteSmoke;
		document.body.style.overflowX = "hidden";
		const root = document.getElementById("root");
		if (root) {
			root.style.minHeight = "100vh";
			root.style.background = darkMode
				? palette.black
				: palette.whiteSmoke;
		}
	}, [darkMode]);

	const styles = useMemo(() => {
		const bg = darkMode ? palette.black : palette.whiteSmoke;
		const panel = darkMode ? palette.jetBlack : "#ffffff";
		const text = darkMode ? palette.whiteSmoke : palette.black;
		const muted = darkMode ? "#cad9e0" : "#596961";

		return {
			page: {
				minHeight: "100vh",
				background: `radial-gradient(circle at top, ${darkMode ? "#40606f" : "#fedbcb"} 0%, ${bg} 42%)`,
				color: text,
				fontFamily:
					'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				padding: "0",
			},
			container: {
				maxWidth: "1240px",
				margin: "0 auto",
				padding: "32px 24px 40px",
			},
			topbar: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: "16px",
				marginBottom: "40px",
			},
			brand: {
				fontSize: "0.95rem",
				letterSpacing: "0.16em",
				textTransform: "uppercase",
				color: muted,
			},
			toggle: {
				border: `1px solid ${darkMode ? "#40606f" : "#bdc7c2"}`,
				background: panel,
				color: text,
				padding: "12px 18px",
				borderRadius: "999px",
				cursor: "pointer",
				fontWeight: 700,
			},
			hero: {
				display: "grid",
				gridTemplateColumns: "1.2fr 0.8fr",
				gap: "28px",
				alignItems: "stretch",
				marginBottom: "28px",
			},
			panel: {
				background: panel,
				border: `1px solid ${darkMode ? "#40606f" : "#bdc7c2"}`,
				borderRadius: "34px",
				padding: "42px",
				boxShadow: darkMode
					? "0 24px 80px rgba(0, 0, 0, 0.35)"
					: "0 24px 80px rgba(34, 51, 59, 0.14)",
			},
			headline: {
				fontSize: "clamp(2.5rem, 6vw, 5rem)",
				lineHeight: 1,
				margin: "0 0 16px",
				fontFamily: 'Georgia, "Times New Roman", serif',
				// fontStyle: "italic",
				fontWeight: 700,
			},
			subtitle: {
				fontSize: "1.1rem",
				lineHeight: 1.7,
				color: muted,
				maxWidth: "60ch",
			},
			accent: {
				color: palette.moltenOrange,
				fontStyle: "italic",
				fontFamily: 'Georgia, "Times New Roman", serif',
			},
			chips: {
				display: "flex",
				flexWrap: "wrap",
				gap: "12px",
				marginTop: "24px",
			},
			chip: {
				border: `1px solid ${darkMode ? "#608ea3" : "#c13f03"}`,
				borderRadius: "999px",
				padding: "12px 16px",
				background: darkMode
					? "rgba(96, 142, 163, 0.12)"
					: "rgba(241, 79, 4, 0.08)",
				fontSize: "0.95rem",
			},
			stack: {
				display: "grid",
				gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
				gap: "22px",
				marginTop: "28px",
			},
			card: {
				background: panel,
				border: `1px solid ${darkMode ? "#40606f" : "#bdc7c2"}`,
				borderRadius: "28px",
				padding: "32px",
				minHeight: "180px",
			},
			cardTitle: { margin: "0 0 10px", fontSize: "1.1rem" },
			cardText: { margin: 0, color: muted, lineHeight: 1.7 },
			metric: {
				fontSize: "2.2rem",
				fontWeight: 800,
				margin: "0 0 6px",
				fontFamily: 'Georgia, "Times New Roman", serif',
				fontStyle: "italic",
			},
			metricLabel: { color: muted, margin: 0 },
			footer: {
				marginTop: "28px",
				padding: "22px 24px",
				borderRadius: "24px",
				background: darkMode
					? "rgba(34, 51, 59, 0.9)"
					: "rgba(255, 255, 255, 0.65)",
				border: `1px solid ${darkMode ? "#40606f" : "#bdc7c2"}`,
				color: muted,
			},
		};
	}, [darkMode]);

	return (
		<div style={styles.page}>
			<div style={styles.container}>
				<div style={styles.topbar}>
					<div>
						<div style={styles.brand}>DevOps Demo</div>
					</div>
					<button
						type="button"
						style={styles.toggle}
						onClick={() => setTheme(darkMode ? "light" : "dark")}
					>
						{darkMode ? "Switch to light" : "Switch to dark"}
					</button>
				</div>

				<div style={styles.hero}>
					<section style={styles.panel}>
						<h1 style={styles.headline}>
							Ship faster with a{" "}
							<span style={styles.accent}>DevOps</span> pipeline.
						</h1>
						<p style={styles.subtitle}>
							This single-page demo shows a modern flow for{" "}
							<span style={styles.accent}>CI</span>,{" "}
							<span style={styles.accent}>CD</span>,
							observability, and rapid feedback.
						</p>
						<div style={styles.chips}>
							<div style={styles.chip}>Git-based workflow</div>
							<div style={styles.chip}>Automated tests</div>
							<div style={styles.chip}>Build and deploy</div>
							<div style={styles.chip}>Live monitoring</div>
						</div>
					</section>

					<section style={styles.panel}>
						<p style={styles.metric}>99.9%</p>
						<p style={styles.metricLabel}>
							Deployment confidence with gated releases
						</p>
						<div style={{ height: 18 }} />
						<p style={styles.metric}>&lt; 5 min</p>
						<p style={styles.metricLabel}>
							From commit to production-ready artifact
						</p>
						<div style={{ height: 18 }} />
						<p style={styles.metric}>24/7</p>
						<p style={styles.metricLabel}>
							Metrics, logs, and alerts on every service
						</p>
					</section>
				</div>

				<div style={styles.stack}>
					<div style={styles.card}>
						<h2 style={styles.cardTitle}>1. Commit</h2>
						<p style={styles.cardText}>
							Developers push changes to Git and trigger automated
							checks on every pull request.
						</p>
					</div>
					<div style={styles.card}>
						<h2 style={styles.cardTitle}>2. Validate</h2>
						<p style={styles.cardText}>
							Tests, linting, and security scans catch issues
							early before a deployment is approved.
						</p>
					</div>
					<div style={styles.card}>
						<h2 style={styles.cardTitle}>3. Deploy</h2>
						<p style={styles.cardText}>
							Artifacts are promoted through environments with
							rollback-ready release steps.
						</p>
					</div>
				</div>

				<div style={styles.footer}>
					The page starts in dark mode and can switch to light mode
					instantly for your demo session.
				</div>
			</div>
		</div>
	);
}
