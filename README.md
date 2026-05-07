# 入力・取り込みワークベンチ

入力フォーム、外部データ取り込み、メタデータ編集を一連化する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

| 項目 | 内容 |
| --- | --- |
| Rank | 61 |
| Domain | ProjectManagement |
| Idea No. | 3 |
| Repository | project-input-intake-workbench |
| 主な公開先 | GitHub Release |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
