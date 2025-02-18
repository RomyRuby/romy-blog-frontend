"use client";
import Icon from "@/components/Icon/index";
import AnimationSpanList from "@/components/AnimationSpanList";
import Chat from "@/components/Chat";
import Bubble from "@/components/roro-ui/bubble";
import { Button, Popover, Modal, message, Tooltip, Divider } from "antd";
import { useEffect, useMemo, useState, Fragment, useRef } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/api/article";
import { Article } from "@/types/article";
import Link from "next/link";
import moment from "moment";
import "moment/locale/zh-cn";
import "./page.scss";
import { MouseEventHandler } from "react";
moment.locale("zh-cn");

const Home = () => {
  const [articleVisible, setArticleVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [cardType, setCardType] = useState("");
  const [isAudioPlay, setIsAudioPlay] = useState(true);
  const mainArticleRef = useRef<null | HTMLDivElement>(null);
  const mainHomeRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    fetchArticles();

    // 添加滚动监听
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 90) {
        setArticleVisible(true);
      }
    };
    document.body.addEventListener("scroll", scollComputed);

    // 销毁滚动监听
    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSetCard = (status: boolean, type: string = "") => {
    setIsCardOpen(status);
    setCardType(type);
    if (status && type === "email") {
      const mailtoLink = `mailto:846261434@qq.com}`;
      window.location.href = mailtoLink;
    }
  };
  const fetchArticles = async () => {
    try {
      const res = await articles();
      setArticleList(res.data.list);
    } catch (error) {
      throw Error();
    }
  };

  const scrollToArticle = () => {
    setArticleVisible(true);
    setTimeout(() => {
      document.body.scrollTo({
        behavior: "smooth",
        top: mainHomeRef.current?.offsetHeight,
      });
    });
  };

  const handleNavigateTo = (url: string) => {
    router.push(url);
  };

  // 自我介绍和外链组件
  const MainIntroduceLeft = useMemo(() => {
    return (
      <>
        <div className="main-introduce-left">
          <div className="main-introduce-left-greeting">
            <AnimationSpanList
              str="Hi,&nbsp;I'm"
              boldStr="&nbsp;Romy&nbsp;Zhang "
              strClassName="main-introduce-left-greeting"
            />
          </div>
          <br />
          <div className="main-introduce-left-empolyment">
            <AnimationSpanList
              str="A&nbsp;Front-end&nbsp;Developer&ensp;"
              boldStr="&lt;since&nbsp;2020&nbsp;/&gt;"
              strClassName="main-introduce-left-greeting"
              boldActive={true}
            />
          </div>
          <br />
          <div className="main-introduce-left-description">
            Welcome to my personal Space 💎
          </div>
          <div className="main-introduce-left-links">
            <Tooltip placement="bottom" title={"github"} arrow={false}>
              <a
                className="main-introduce-left-links-item github"
                href="https://github.com/RomyRuby"
                target="_blank"
              >
                <Icon name="github" size={21} />
              </a>
            </Tooltip>

            <div
              className="main-introduce-left-links-item email"
              onClick={() => handleSetCard(true, "email")}
            >
              <Icon name="email" size={21} />
            </div>

            <div
              className="main-introduce-left-links-item wechat"
              onClick={() => handleSetCard(true, "wechat")}
            >
              <Icon name="weChat" size={35} />
            </div>

            <Button
              className="main-introduce-left-links-item aichat"
              type="primary"
              onClick={showModal}
            ></Button>
          </div>
        </div>
      </>
    );
  }, []);

  // 文章组件
  const MainArticles = useMemo(() => {
    const List = articleList.map((item: Article) => {
      return (
        <Fragment key={item._id}>
          <div className="main-article-item">
            <div className="main-article-item-icon">
              <div className="main-article-item-icon-circle"></div>
              <div className="main-article-item-icon-line"></div>
            </div>
            <div className="main-article-item-title">
              <Link href={"/articles/" + item._id}>{item.title}</Link>
            </div>

            <div className="main-article-item-date">
              {moment(item.updated).fromNow()}
            </div>
          </div>
        </Fragment>
      );
    });
    return (
      <>
        {articleVisible && (
          <div className="main-article" ref={mainArticleRef}>
            <div className="main-article-title">最近更新的笔记</div>
            <div className="main-article-list">{List}</div>

            <div
              className="main-article-more"
              onClick={() => handleNavigateTo("/articles")}
            >
              <div className="main-article-more-icon">
                <Icon name="circleRight" size={16} />
              </div>
              <span>还有更多</span>
            </div>
          </div>
        )}
      </>
    );
  }, [articleVisible, articleList]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("copy success");
    } catch (err) {
      message.error("copy error");
    }
  };

  const Email = () => {
    return (
      <div className="email-box">
        <span>846261434@qq.com</span>
        <div
          className="email-box-icon"
          onClick={() => handleCopy("846261434@qq.com")}
        >
          <Icon name="copy" size={16} />
        </div>
      </div>
    );
  };

  const Wechat = () => {
    return <div className="wechat-img"></div>;
  };

  const handleClickAudioPlay = () => {
    setIsAudioPlay(!isAudioPlay);
  };

  return (
    <>
      <div className="main">
        <div className="main-home" ref={mainHomeRef}>
          <div className="main-introduce">
            {/* 左边介绍和按钮 */}
            {MainIntroduceLeft}
            {/* 右边的大头像 */}
            <div className="main-introduce-right">
              <div className="main-introduce-right-img-wrap animate__animated animate__lightSpeedInRight">
                <div className="main-introduce-right-img"></div>x
              </div>
            </div>
          </div>

          <div className="main-ai" onClick={showModal}>
            <Bubble
              width={200}
              borderRadius={[25, 25, 3, 25]}
              backgroundColor="var(--theme-sub-color)"
              bubbleClass="main-ai-bubble animate__animated animate__fadeInUp animate__delay-1s"
              slot={
                <div className="main-ai-bubble-content">
                  <div className="main-ai-bubble-content-avatar">
                    <img src="/static/img/AI.jpg" alt="ai avatar" />
                    <div className="main-ai-bubble-content-avatar-lianyi-1"></div>
                    <div className="main-ai-bubble-content-avatar-lianyi-2"></div>
                  </div>

                  <div className="main-ai-bubble-content-name">
                    我是 <span>AI Romi</span>,
                  </div>
                  <div className="main-ai-bubble-content-description">
                    擅长前端问题，点击进入聊天！
                  </div>
                </div>
              }
            />
          </div>

          <div className="main-guide" onClick={() => scrollToArticle()}>
            <div className="main-guide-sentence">
              种一棵树最好的时机是十年前，其次是现在
            </div>
            <div className="main-guide-arrow">
              <Icon name="arrowDown" />
            </div>
          </div>
        </div>
        {/* 文章 */}
        {MainArticles}
      </div>
      {/* AI Chat Modal */}
      <Modal
        className="chat-modal"
        title="AI Romi"
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <Chat />
      </Modal>

      {/* Card Modal */}
      <Modal
        wrapClassName="card-modal-wrap"
        className="card-modal"
        open={isCardOpen}
        onCancel={() => handleSetCard(false)}
        centered
        footer={null}
      >
        <div className="card-modal-avatar"></div>
        <div className="card-modal-name">Romy Zhang</div>
        {cardType === "email" && <Email />}
        {cardType === "wechat" && <Wechat />}
      </Modal>
    </>
  );
};

export default Home;
