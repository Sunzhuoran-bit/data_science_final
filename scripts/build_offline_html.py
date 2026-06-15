from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data_science_final.html"


def read_text(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def inline_script(path: str) -> str:
    content = read_text(path).replace("</script>", "<\\/script>")
    return f"<script>\n{content}\n</script>"


def main() -> None:
    styles = read_text("src/styles.css")
    scripts = "\n".join(
        inline_script(path)
        for path in [
            "data/question_bank.js",
            "data/supplemental_questions.js",
            "data/full_coverage_questions.js",
            "data/final_bank_questions.js",
            "data/answer_overrides.js",
            "data/merge_overrides.js",
            "src/app.js",
        ]
    )
    html = f"""<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>data_science_final</title>
    <style>
{styles}
    </style>
  </head>
  <body>
    <div id="app"></div>
{scripts}
  </body>
</html>
"""
    OUTPUT.write_text(html, encoding="utf-8", newline="\n")
    print(OUTPUT)


if __name__ == "__main__":
    main()
