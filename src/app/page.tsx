"use client";
import "./page.scss";
import Icon from "@/components/Icon/index";
import AnimationSpanList from "@/components/AnimationSpanList";
import * as request from "../api/user";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";

const Home = () => {
  const [articleVisible, setArticleVisible] = useState(false);
  const [albumVisible, setAlbumVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 80) {
        setArticleVisible(true);
      }
      if ((e.target as HTMLElement).scrollTop > 620) {
        setAlbumVisible(true);
      }
    };

    document.body.addEventListener("scroll", scollComputed);

    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="main">
        <div className="main-home">
          <div className="main-introduce">
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
              {/* 左边的按钮 */}
              <div className="main-introduce-left-links">
                <a
                  className="main-introduce-left-links-item github"
                  href="https://github.com/RomyRuby"
                  target="_blank"
                >
                  <Icon name="github" size={21} />
                </a>

                <div className="main-introduce-left-links-item email">
                  <Icon name="email" size={21} />
                </div>

                <Button
                  className="main-introduce-left-links-item chat"
                  type="primary"
                  onClick={showModal}
                >
                  和我聊天
                </Button>

                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </div>
            </div>
            {/* 右边的大头像 */}
            <div className="main-introduce-right">
              <div className="main-introduce-right-img"></div>
              <div className="img-border-1"></div>
              <div className="img-border-2"></div>
            </div>
          </div>
          <div className="main-guide">
            <div className="main-guide-sentence">
              种一棵树最好的时机是十年前，其次是现在
            </div>
            <div className="main-guide-arrow">
              <Icon name="arrowDown" />
            </div>
          </div>
        </div>

        {articleVisible && (
          <div className="main-article">
            <div className="main-article-content">
              <div className="main-article-title">最近更新的笔记</div>
              <div className="main-article-list">
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
              </div>
              <div className="main-article-more">
                <Icon name="circleRight" />
                <span>还有更多</span>
              </div>
            </div>
            <div className="main-article-content">
              <div className="main-article-title">最近更新的日记</div>
              <div className="main-article-list">
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
                <div className="main-article-item">
                  <div className="main-article-item-icon">
                    <div className="main-article-item-icon-circle"></div>
                    <div className="main-article-item-icon-line"></div>
                  </div>
                  <div className="main-article-item-title">
                    人机交互：页面过渡动画和内容呈现
                  </div>
                  <div className="main-article-item-date">1 个月前</div>
                </div>
              </div>
              <div className="main-article-more">
                <Icon name="circleRight" />
                <span>还有更多</span>
              </div>
            </div>
          </div>
        )}

        {albumVisible && (
          <div className="main-album">
            <div className="main-album-title">世间只是一些影影绰绰的温柔</div>
            <div className="main-album-list">111</div>
          </div>
        )}

        <div className="main-end">
          <div className="main-end-guide">可以绕行，狐疑，留在原地</div>
          <div className="main-end-greeting"></div>
          <div className="main-end-nav"></div>
          <div className="main-end-operate"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
