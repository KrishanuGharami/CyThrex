import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="hero-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image9Src:
    'https://images.unsplash.com/photo-1601339434203-130259102db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1546146830-2cca9512c68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1495592822108-9e6261896da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1604882737274-4afaddefec9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Detect Cyber Threats Using Machine Learning',
  image3Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1604525241109-c3b7eecf4add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  image1Alt: 'Cyber Threat Detection Using Machine Learning',
  image2Src:
    'https://images.unsplash.com/photo-1557425507-57dd2cafc241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Protect your organization with advanced cyber threat detection powered by machine learning algorithms. Stay ahead of potential security breaches and safeguard your data.',
  image10Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1544256718-3bcf237f3974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Learn More',
  image5Alt: 'Hero Image',
  action1: 'Get Started',
  image5Src:
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM2MDg5OHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image9Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image11Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  content1: PropTypes.string,
  image10Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image10Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  action2: PropTypes.string,
  image5Alt: PropTypes.string,
  action1: PropTypes.string,
  image5Src: PropTypes.string,
}

export default Hero
