import Highlight from "./components/highlight";
import Project from "./components/project/project";
import ComputeHub from "@/public/content/ComputeHub.mdx";
import Dreamhacker from "@/public/content/Dreamhacker.mdx";
import Lychie from "@/public/content/Lychie.mdx";

export interface PageSettings {
  isMobile: boolean,
  isLeft: boolean
}

export interface DataProps {
  year: string,
  nameEn: string,
  nameJa: string,
  short_des: string,
  long_des: string,
  images: string[],
  gif: string,
  link: string
  settings: PageSettings
  mdx: any
}

const data: Record<string, DataProps> = {
  "dreamhacker": {
    year: "2024",
    nameEn: "Dreamhacker",
    nameJa: "若い者向け留学体験共有Forum。",
    short_des: "応募体験、勉強方法、大学評判等。",
    long_des: "国際的なオンラインおよびオフラインのコミュニティを発展させることに専念しています。メンバーはGMATやTOEFLの準備、ビジネススクールへの出願、学校生活、キャリア開発、ビジネスの機会を探るなどの経験を共有することができます。他者が個人的および専門的な目標を達成する手助けをし、メンバー同士の信頼できる長期的な関係を築くことを目指しています。",
    images: [
      "/project/dreamhacker/4.png",
      "/project/dreamhacker/5.png",
      "/project/dreamhacker/6.png",
    ],
    gif: "/ecom.gif",
    link: "https://dream-hacker.com",
    settings: {
      isMobile: false,
      isLeft: false
    },
    mdx: <Dreamhacker />
  },
  "lychie": {
    year: "2024",
    nameEn: "Store Management",
    nameJa: "ストア管理",
    short_des: "私の店舗を管理するために、包括的なEコマース店舗管理システムを開発しました。",
    long_des: "製品および在庫管理、注文処理、顧客関係管理、支払い処理を含む包括的なEコマースストア管理システムを開発しました。フロントエンドにはNext.js、バックエンドにはNest.js、インフラにはAWSを使用しています。ログインしてご自身で体験することができます。",
    images: [
      "/project/lychie/3.jpg",
      "/project/lychie/2.jpg",
      "/project/lychie/1.jpg",
    ],
    gif: "/ecom.gif",
    link: "https://lychie.vercel.app",
    settings: {
      isMobile: true,
      isLeft: true
    },
    mdx: <Lychie />
  }, 

  "compute_hub": {
    year: "2023",
    nameEn: "ComputeHub",
    nameJa: "分散コンピューティング",
    short_des: "ブラウザーでコンピューティングパワーを共有するプロジェクト。「PandoComputingコアモジュールを使用」",
    long_des: "提案された解決策は、個人がコンピュータ、ノートパソコン、モバイルフォンなどの個人デバイスを通じて計算能力を提供できるボランティアコンピューティングシステムを構築することです。このシステムは、ボランティアが登録し、計算能力を提供し、研究プロジェクトに参加できるように、シンプルで使いやすいユーザーインターフェースを提供します。同時に、高度なアルゴリズムを使用してタスクを管理し、リソースを分配し、計算パフォーマンスを最適化します。",
    images: [
      "/project/computehub/2.png",
      "/project/computehub/1.png",
    ],
    gif: "/compute.gif",
    link: "https://compute-hub-fe-vert.vercel.app",
    settings: {
      isMobile: false,
      isLeft: false
    },
    mdx: <ComputeHub />
  },

}

export default async function Home() {
  return (
    <div>
      <Highlight />
      {Object.values(data).map((project) =>
        <Project data={project} key={project.link}>
          {project.mdx}
        </Project>
      )}
    </div>
  );
}
