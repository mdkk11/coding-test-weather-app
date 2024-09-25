# Gaudiy フロントエンドコーディングテスト

- URL：https://coding-test-weather-app.vercel.app

## Stack

- **Build tool**: [Vite](https://vitejs.dev/)
- **UI Framework**: [React](https://react.dev/)
- **Styling**: [Vanilla Extract](https://vanilla-extract.style/)
- **Routing**: [React Router](https://reactrouter.com/en/main)
- **Data fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide](https://lucide.dev/)
- **Testing**:
  - [Storybook](https://storybook.js.org/)
  - [Vitest](https://vitest.dev/)

## Usage

1. **環境変数の設定**

   `.env.example` の内容を参考に、WeatherAPI の Key を設定した `.env` ファイルを作成してください

2. **依存関係のインストール**

   ```sh
   npm run install
   ```

3. **開発サーバーの起動**

   ```sh
   npm run dev
   ```

   or

   > [!NOTE]
   > Vercel Functionを使用している為、APIを含めた開発サーバーの起動は`vercel dev`で行う必要があります

   ```sh
   vercel -A vercel.local.json dev
   ```

4. **Vitest による単体テストの実行**

   ```sh
   npm run test
   ```

5. **Storybook の起動**

   ```sh
   npm run storybook
   ```

6. **Storybookによるコンポーネントテストの実行**

   ```sh
   npm run storybook:test
   ```

## Answer

### 課題の取り組み開始から完了までに要した合計時間

- 約24時間

### 初めて使用する技術があれば、それが何かとその代わりとなる経験があるかを

- Vanilla Extract → TailwindCSS
- Vitest → Jest
- Vercel Edge Function → 特になし

### 追加したnpmパッケージがあれば、その選定理由と役割について共有してください

#### React Router

- ルーティング機能の為
- TanStack Routerも選択肢にあったが、使ったことがなく他にも初見の技術が複数あり、時間のことも考え使ったことがあるこちらを選択

#### TanStack Query

- データキャッシュの為
- SWRも選択肢にあったが...（以下React Routerと同じ理由）

#### Vanilla Extract

- スタイリングはTailwind CSSを一番使い慣れていたが、禁止とのことでViteでデフォルトで使えるmodule CSSを使おうとしたが、TypeScriptと相性が良く描きごごちが似てそうで、且つゼロランタイムでEmotionCSSよりはパフォーマンス面で優位性がありそうだったので選択

### LLMを課題提出の過程で使用した場合。その活用方法と有効性

基本的にやることが明確だが手作業でやるのが面倒なことを丸投げしました。
課題の中の具体的なケースでいうと、天気Codeに応じてアイコンや背景色を変える仕様にしたかったので、[公式のcodeと天気の組み合わせのデータ](https://www.weatherapi.com/docs/weather_conditions.json)から晴れ、曇り、雨、雪に応じた天気の状態をまとめる為に使いました。(https://github.com/mdkk11/coding-test-weather-app/blob/main/src/features/weather/const/condition.ts)
他にも型情報を自分で作るのが面倒だったので、APIレスポンスをコピぺして作成してもらいました。
