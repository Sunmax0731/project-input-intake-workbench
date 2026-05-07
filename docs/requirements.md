# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 61 |
| Domain | ProjectManagement |
| Idea No. | 3 |
| Repository | project-input-intake-workbench |
| 主な公開先 | GitHub Release |

## 背景

取り込み前の確認やメタ情報の抜けが後工程で見つかりやすい。

## 目的

入力フォーム、外部データ取り込み、メタデータ編集を一連化する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- intake item を複数件まとめて検証できる。
- required fields: `id`, `title`, `source`, `owner`, `priority`, `acceptance`。
- warning field: `reviewNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
