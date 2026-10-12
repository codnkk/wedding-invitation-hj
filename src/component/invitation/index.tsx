import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { Modal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"
import { useState } from "react"

/**
 * 초대 메시지와 혼주 정보, 연락하기 기능을 제공하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 모시는 글 섹션
 */
export const Invitation = () => {
  const contactModalState = useState(false)
  return (
    <>
      <LazyDiv className="card invitation">
        <h2 className="english">Invitation</h2>

        <div className="break" />

        {/* 초대 문구 */}
        <div className="content">저물어가는 한 해의 끝자락</div>
        <div className="content">저희는 가장 소중한 인연을 만나</div>
        <div className="content">새로운 시작을 향해 나아갑니다.</div>
        <div className="break" />
        <div className="content">삶에 햇살이 뜨거울 땐 가려주고,</div>
        <div className="content">비가 오면 우산이 되어주는</div>
        <div className="content">부부가 되겠습니다.</div>
        <div className="break" />
        <div className="content">소중한 분들과 함께 나누는 기쁨이</div>
        <div className="content">저희에게는 큰 힘이 될 것입니다.</div>
        <div className="content">기쁜 날 걸음하시어 자리를 빛내주세요.</div>

        <div className="break" />

        {/* 혼주 및 신부 정보 */}
        <div className="name">
          {BRIDE_FATHER} · {BRIDE_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{BRIDE_TITLE}</span>
          </span>{" "}
          {BRIDE_FULLNAME}
        </div>
        {/* 혼주 및 신랑 정보 */}
        <div className="name">
          {GROOM_FATHER} · {GROOM_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{GROOM_TITLE}</span>
          </span>{" "}
          {GROOM_FULLNAME}
        </div>

        <div className="break" />

      </LazyDiv>
    </>
  )
}
