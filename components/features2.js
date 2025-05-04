import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features2-container2 thq-section-max-width">
          <div className="features2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 0 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 1 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal3"
            >
              <div className="features2-divider-container3">
                {activeTab === 2 && (
                  <div className="features2-container5"></div>
                )}
              </div>
              <div className="features2-content3">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features2-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features2-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features2-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .features2-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .features2-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1604866830172-c9427272ccf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'feature 1',
  feature2Title: 'Real-Time Threat Detection',
  feature2Description:
    'Our machine learning algorithms continuously monitor network activities in real-time to detect and respond to cyber threats instantly.',
  feature2ImgAlt: 'Real-Time Threat Detection Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1501526029524-a8ea952b15be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1Title: 'Feature #1',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Feature #3',
  feature3ImgAlt: 'image',
}

Features2.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features2
