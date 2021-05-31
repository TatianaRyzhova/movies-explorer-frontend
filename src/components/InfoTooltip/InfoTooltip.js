import React, {useEffect} from "react";
import authFailureImage from "../../images/auth-failure.svg";
import authSuccessImage from "../../images/auth-success.svg";

function InfoTooltip(props) {

  useEffect(() => {
    if (!props.isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [props.isOpen, props.onClose]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && props.isOpen) {
      props.onClose();
    }
  }

  return (
    <div className={`popup popup_type_info-tooltip ${props.isOpen ? 'popup_opened' : ''}`}
         onMouseDown={handleOverlayClose}
    >
      <div className="popup__content">
        <button type="button" aria-label="Close"
                className="popup__close-button"
                onClick={props.onClose}
        />
        <div className="info-tooltip">
          <img src={props.success ? authSuccessImage : authFailureImage} alt="register response"
               className="info-tooltip__image"/>
          <p className="info-tooltip__message">
            {props.infoTooltipMessage}
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip;
