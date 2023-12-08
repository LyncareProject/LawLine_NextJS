import styles from "./page.module.css";

const Provision = () => {
  return (
    <div className={styles.Provision}>
      <h2 className={styles.Title}>「로라인」 서비스 이용약관</h2>
      <h3 className={styles.SubTitle}>제1조 (목적)</h3>
      <p className={styles.Desc}>
        본 약관은 위바이브 주식회사(이하 “회사”라 합니다)가 제공하는 LawLine
        서비스(이하 “LawLine”이라 합니다)의 이용과 관련하여 회사와 회원의 권리,
        의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
      </p>

      <h3 className={styles.SubTitle}>제2조 (정의)</h3>
      <p className={styles.Desc}>
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
      </p>
      <p className={styles.Desc}>
        1{")"} “LawLine”라 함은 회사가 대한민국 변호사 자격 소지자 및 그 외 
        회사가 지정하는 자를 대상으로 제공하는 어플리케이션 및 웹 서비스를 지칭합니다.
      </p>
      <p className={styles.Desc}>
        2{")"} “회원”이라 함은 서비스를 이용하고자 가입을 신청하고 회사가 그 신청을 
        처리해 계정이 등록된 자를 말합니다.
      </p>
      <p className={styles.Desc}>
        3{")"} “이용자”라 함은 회원 등록 여부와 무관하게 LawLine을 찾는 모든 
        방문자를 지칭합니다.
      </p>
      <p className={styles.Desc}>
        4{")"} LawLine 회원”이라 함은 LawLine의 서비스 이용약관에 동의하여 
        회원으로 가입한 변호사를 말합니다.
      </p>
      <p className={styles.Desc}>
        5{")"} “계정 정보”라 함은 LawLine을 이용하기 위해 회사가 정한 필수 내지
        선택 입력 정보로서 LawLine 웹사이트 또는 고객센터를 통해 정보확인, 변경
        처리 등을 관리할 수 있는 회원정보 항목을 말합니다.
      </p>
      <p className={styles.Desc}>
        6{")"} “콘텐츠(Contents)”라 함은 회사에서 제공하는 모든 정보 및 회원이
        LawLine 이용과정에서 게시하는 모든 정보를 지칭합니다.
      </p>
      <p className={styles.Desc}>
        본 약관에 사용되는 용어 중 본 조에서 정하지 아니한 부분은 관계법령 및
        일반관례에 따릅니다.
      </p>

      <h3 className={styles.SubTitle}>제3조 (신원정보 등의 제공)</h3>
      <p className={styles.Desc}>
        회사는 본 약관의 내용, 상호, 대표자성명, 전화번호, 팩스번호,
        사업자등록번호, 고객센터 등을 회원이 쉽게 알 수 있도록 LawLine 화면 하단에
        게시합니다.
      </p>

      <h3 className={styles.SubTitle}>제4조 (약관의 명시 및 개정 등)</h3>
      <p className={styles.Desc}>
        ① 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 화면 내 또는
        별도의 연결화면에 게시합니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 이 약관을 개정할
        수 있습니다.
      </p>
      <p className={styles.Desc}>
        ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
        현행약관과 함께 LawLine 내의 적절한 장소에 개정약관의 적용일자 7일 전부터
        적용일자 전일까지 공지합니다. 다만, 회원에게 불리한 약관의 개정의
        경우에는 적용일자 30일 전부터 공지하고, 회원이 가입시 제공한 연락처 등의
        전자적 수단을 통해 따로 명확히 통지하도록 합니다.
      </p>
      <p className={styles.Desc}>
        ④ 회사가 회원에게 개정약관을 공지 또는 통지하면서 변경된 약관 적용일까지
        거부의사를 표시할 수 있다고 하였음에도 불구하고, 회원이 명시적으로
        거부의 의사표시를 하지 아니한 경우 회원은 개정약관에 동의한 것으로
        봅니다.
      </p>
      <p className={styles.Desc}>
        ⑤ 회원이 개정약관의 적용에 동의하지 않는 경우 회사는 개정 약관의 내용을
        적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만,
        회사가 개정약관에 부동의한 회원에게 기존 약관을 적용할 수 없는 특별한
        사정이 있는 경우에는 회사는 해당 회원과의 이용계약을 해지할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>제5조 (약관 외 준칙)</h3>
      <p className={styles.Desc}>
        ① 회사는 필요한 경우 특정 서비스에 관하여 적용될 사항을 위해
        개별약관이나 이용정책을 정하여 운영할 수 있으며, 해당 내용은 홈페이지
        등을 통해 공지합니다.
      </p>
      <p className={styles.Desc}>
        ② 본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 개별약관,
        이용정책에서 정한 바에 따릅니다.
      </p>
      <p className={styles.Desc}>
        ③ 본 약관과 개별약관, 이용정책의 내용이 충돌할 경우 본 약관에 별도의
        규정이 없는 한 본 약관에 따릅니다.
      </p>
      <p className={styles.Desc}>
        ④ 회원은 항상 개별약관이나 이용정책의 내용에 변경이 있는지 여부를
        확인하여야 하며, 이를 확인하지 않아 발생한 손해에 대해서는 회사는 책임을
        부담하지 않습니다.
      </p>

      <h3 className={styles.SubTitle}>제6조 (회원에 대한 통지)</h3>
      <p className={styles.Desc}>
        ① 회사는 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한
        회원이 제공한 (휴대)전화번호 및 로그인 시 동의창, 이메일 등 적절한
        수단으로 통지할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 회원 전체에 대한 통지의 경우 7일 이상 서비스 내에 게시함으로써
        제1항의 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여
        중대한 영향을 미치는 사항에 대하여는 제1항의 통지를 합니다.
      </p>
      <p className={styles.Desc}>
        ③ 회사는 회원의 연락처 미기재, 변경 후 미수정 등으로 인하여 개별 통지가
        어려운 경우에 한하여 전 항의 공지를 함으로써 개별 통지를 한 것으로
        간주합니다.
      </p>

      <h3 className={styles.SubTitle}>제2장 회원의 LawLine 이용에 관한 사항</h3>
      <h3 className={styles.SubTitle}>제1절 총칙</h3>
      <h3 className={styles.SubTitle}>제7조 (LawLine의 내용)</h3>
      <p className={styles.Desc}>
        ① LawLine이 회원에게 제공하는 것은 아래와 같습니다.
      </p>
      <p className={styles.Desc}>
        1. 회원이 LawLine에서 제공하는 방식을 통해 LawLine 회원과 법률상담 등 계약을
        체결하는 서비스
      </p>
      <p className={styles.Desc}>
        2. 기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해
        {'"'}회원{'"'}에게 제공하는 일체의 서비스
      </p>
      <p className={styles.Desc}>
        ② 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용 가능 회원, 이용
        가능 시간을 별도로 지정할 수 있습니다. 다만, 이러한 경우에는 그 내용을
        사전에 공지합니다.
      </p>
      <p className={styles.Desc}>
        ③ LawLine은 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
      </p>
      <h3 className={styles.SubTitle}>제 8 조 (이용 결과의 저작권)</h3>
      <p className={styles.Desc}>
        회원이 LawLine을 이용한 과정에서 남긴 정보에 대한 저작권은 회사에게
        있습니다.
      </p>

      <h3 className={styles.SubTitle}>제 9 조 (권리의 귀속)</h3>

      <p className={styles.Desc}>
        ① LawLine에 대한 저작권 및 지적재산권은 회사에 귀속되어 있습니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 LawLine과 관련하여 {'"'}회원{'"'}에게 회사가 정한 이용조건에 따라 계정,
        {'"'}아이디{'"'}, 콘텐츠, {'"'}포인트{'"'} 등을 이용할 수 있는 이용권만을 부여하며,
        회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.
      </p>

      <h3 className={styles.SubTitle}>제 10 조 (포인트)</h3>
      <p className={styles.Desc}>
        회사는 LawLine의 효율적 이용 및 운영을 위해 사전 공지 후 {'"'}포인트{'"'}의 일부
        또는 전부를 조정할 수 있으며, {'"'}포인트{'"'}는 회사가 정한 기간에 따라
        주기적으로 소멸할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>제 11 조 (비용결제 및 환불 등)</h3>
      <p className={styles.Desc}>
        ① 회원은 회사에서 정한 방법에 따라 비용을 결제하고, 제7조제1항 서비스를
        이용할 수 있습니다.
      </p>
      <p className={styles.Desc}>② 포인트 사용 이후에는 환불할 수 없습니다.</p>

      <h3 className={styles.SubTitle}>제12조 (이용계약 해제, 해지 등)</h3>
      <p className={styles.Desc}>
        ① 회원은 언제든지 LawLine 이용계약의 해지를 신청할 수 있으며, 회사는
        관련법령에서 정하는 바에 따라 이를 즉시 처리하여야 합니다.
      </p>
      <p className={styles.Desc}>
        ② 회원이 이용계약을 해지할 경우, 회사는 관련법령 및 개인정보처리방침에
        따라 회원 정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 정보를
        삭제합니다.
      </p>
      <p className={styles.Desc}>
        ③ 이용계약 해지로 인해 발생한 불이익에 대한 책임은 회원 본인이 부담해야
        하며, 회사는 회원에게 부가적으로 제공한 각종 무상혜택을 회수할 수
        있습니다.
      </p>
      <p className={styles.Desc}>
        ④ 회사는 회원에게 다음 각 호에 해당하는 사유가 발생하거나 확인된 경우
        이용계약을 해지할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        1{")"} 회원이 LawLine의 원활한 진행을 방해하는 행위를 하거나 시도한 경우
      </p>
      <p className={styles.Desc}>
        2{")"} 회원이 고의로 회사의 영업을 방해한 경우
      </p>
      <p className={styles.Desc}>
        3{")"} 다른 회원의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 법령
        또는 선량한 풍속 기타 사회질서에 위배되는 행위를 한 경우
      </p>
      <p className={styles.Desc}>
        4{")"} 회원이 본 약관에 위배되는 행위를 한 경우
      </p>
      <p className={styles.Desc}>
        5{")"} 기타 회사가 합리적인 판단에 기하여 서비스의 제공을 거부할 필요가
        있다고 인정할 경우
      </p>
      <p className={styles.Desc}>
        ⑤ 회사가 이용계약을 해지하는 경우 회사는 회원에게 해지사유를 밝혀
        해지의사를 통지합니다. 이 경우 회사는 해지를 하기 전에 상당한 기간을
        정하여 회원에게 이의 신청의 기회를 부여합니다. 다만, 본 약관 및
        이용정책에서 정하는 사유가 있을 경우에는 별도의 이의 신청 기간을
        부여하지 않을 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ⑥ 이용계약이 회사에 의해 해지되는 경우 회원의 재이용신청에 대해 회사는
        승낙을 거절할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ⑦ 회원의 귀책사유로 인해 이용계약이 해지됨으로써 발생한 손해는 당해
        회원이 부담하여야 하며, 회사는 관련 법령에 규정이 없는 한 책임을
        부담하지 않습니다.
      </p>

      <h3 className={styles.SubTitle}>제13조 (LawLine의 제공 및 중단)</h3>

      <p className={styles.Desc}>
        ① 회사는 LawLine을 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 LawLine의 제공에 필요한 경우 정기점검을 실시할 수 있으며,
        정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다.
      </p>
      <p className={styles.Desc}>
        ③ 회사는 통신, 전력 등의 공급이 중단되는 불가피한 경우는 물론
        정보통신설비의 보수점검, 증설, 교체, 이전 및 고장 또는 운영상 상당한
        이유가 있는 경우 7일 이전에 공지 후 서비스의 제공을 일시적으로 중단할 수
        있습니다. 다만, 회사가 사전에 공지할 수 없는 부득이한 사유가 있는 경우
        사후에 공지할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ④ 회사는 천재지변, 전쟁, 폭동, 테러, 해킹, DDOS 등 불가항력적 사유로
        서비스가 중단된 경우 즉시 이러한 사실을 공지하되, 만일 정보통신설비의
        작동불능 등의 불가피한 사유로 인해 공지가 불가능한 경우에는 이러한
        사정이 해소된 이후 즉시 공지합니다.
      </p>
      <p className={styles.Desc}>
        ⑤ 회사는 파산 또는 회생절차 개시 등 정상적인 영업활동이 곤란한 경우 또는
        회사의 영업 상 필요한 경우 서비스 내용을 변경하거나 서비스를 종료할 수
        있습니다. 이 경우 회사는 제6조(회원에 대한 통지)에서 정한 방법에 따라
        서비스 내용의 변경 사항 또는 종료를 공지 또는 통지할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ⑥ 회사는 본 조 제3항 내지 제4항의 사유가 발생한 경우 최대한 빠른 시간
        내에 서비스를 재개하도록 최선의 노력을 다합니다.
      </p>

      <h3 className={styles.SubTitle}>제14조 (서비스의 변경)</h3>
      <p className={styles.Desc}>
        ① 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고
        있는 전부 또는 일부의 서비스를 변경할 수 있습니다. 다만, 변경된 내용이
        중대하거나 회원에게 불리한 경우에는 회사가 해당 서비스를 제공받는
        회원에게 제6조(회원에 대한 통지)에 정한 방법으로 통지합니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 전항에 따른 서비스 변경에 대한 동의를 거절한 회원에 대하여는
        변경 전 서비스를 제공합니다. 다만, 그러한 서비스 제공이 불가능할 경우
        해당 서비스의 제공을 중지하거나 이용계약을 해지할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>제15조 (LawLine 이용제한 등)</h3>
      <p className={styles.Desc}>
        ① 회사는 LawLine의 안정성과 신뢰성을 위하여 아래 각 호의 사유가 발생하는
        경우 회원의 서비스 이용을 정지하거나 이용계약을 해지할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        1{")"} 회원의 행위가 본 약관 제22조(회원의 금지행위)의 금지행위에
        해당하는 경우
      </p>
      <p className={styles.Desc}>
        2{")"} 본 약관 또는 이용정책 등을 위반한 경우
      </p>
      <p className={styles.Desc}>
        ② 제1항의 이용제한 등은 회사가 정한 통지방법에 따라 회원에게 그 의사를
        표시한 때에 효력이 발생합니다.
      </p>
      <p className={styles.Desc}>
        ③ 서비스 이용이 정지된 회원은 해당 기간 동안 LawLine을 이용할 수 없으며, 기
        지급된 쿠폰 등도 사용이 불가합니다. 이용제한의 구체적인 기준 등에
        대해서는 서비스정책에서 정합니다.
      </p>
      <p className={styles.Desc}>
        ④ 회사는 회원이 해당 사유를 소명하는 등 회사가 정하는 기준을 충족하는
        경우 제1항의 이용정지 조치를 해소할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>
        제2절 회원과 LawLine 회원 간 법률상담 등 계약체결 서비스
      </h3>
      <h3 className={styles.SubTitle}>
        제16조 (회원과 LawLine 회원 간 법률상담 등 계약체결)
      </h3>
      <p className={styles.Desc}>
        ① 회원과 LawLine 회원의 법률상담 등 계약체결의 방식은 다음과 같습니다.
      </p>
      <p className={styles.Desc}>
        가. LawLine에서 제공하는 절차에 따라 회원이 필수 및 선택항목들을 기재하여
        청약을 하면 LawLine 회원의 승낙의 과정을 거쳐 계약이 체결되는 방식
      </p>
      <p className={styles.Desc}>
        나. 회사가 제공하는 절차에 따라 회원이 필수 및 선택항목들을 기재하여
        청약의 유인을 하면 LawLine 회원의 청약 과정을 거쳐 회원의 승낙을 통해
        계약이 체결되는 방식
      </p>
      <p className={styles.Desc}>
        다. 그 외 서비스 특성에 따라 회사가 별도로 설정하여 계약이 체결되는 방식
      </p>
      <p className={styles.Desc}>
        ② 회사는 계약체결의 방식에 대해서는 회원의 이용현황, 프로그램의 기술적
        수준 등에 따라 임의로 변경할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>
        제17조 (회원간 계약에 대한 회사의 책임)
      </h3>
      <p className={styles.Desc}>
        회원과 LawLine 회원 사이의 계약에 대해 회사는 어떠한 법률상 책임을 지지
        않으며, 또한 회원과 LawLine 회원의 각 회사와의 법률상 관계는(이용해지 등)
        회원과 LawLine 회원 사이에 체결된 법률상담 등 계약에 영향을 미치지
        않습니다.
      </p>

      <h3 className={styles.SubTitle}>제4절 비용</h3>
      <h3 className={styles.SubTitle}>제18조 (서비스 이용료 등)</h3>
      <p className={styles.Desc}>
        회사는 LawLine에 대한 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는
        일부의 서비스에 대하여 이용료를 부과할 수 있습니다.
      </p>

      <h3 className={styles.SubTitle}>제3장 회사와 회원의 의무</h3>
      <h3 className={styles.SubTitle}>제19조 (회사의 의무)</h3>
      <p className={styles.Desc}>
        ① 회사는 관련법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지
        않으며, 계속적이고 안정적으로 LawLine 서비스를 제공하기 위하여 최선을
        다하여 노력합니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 LawLine의 이용과 관련하여 회원으로부터 제기된 의견이나 불만이
        정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한
        의견이나 불만사항에 대해서는 이메일을 활용하거나 연락처 등을 통하여
        회원에게 처리과정 및 결과를 전달합니다.
      </p>
      <h3 className={styles.SubTitle}>제20조 (개인정보 보호의무)</h3>
      <p className={styles.Desc}>
        ① 회사는 회원이 안전하게 서비스를 이용할 수 있도록 회원의 개인정보
        보호를 위하여 개인정보보호정책을 실시하며, 이에 따라 회원의 개인정보를
        보호할 의무가 있습니다. 회사의 개인정보보호정책은 회사의 LawLine 서비스를
        통하여 확인할 수 있습니다.
      </p>
      <p className={styles.Desc}>
        ② 회사는 제16조 서비스 이용에 필요한 경우, 원활한 계약 체결을 위하여
        회원의 정보를 LawLine 회원에게 제공할 수 있습니다.
      </p>
      <h3 className={styles.SubTitle}>제21조 (회원의 의무)</h3>
      <p className={styles.Desc}>
        ① 회원은 LawLine을 통해 연결된 LawLine 회원에게 법률상담 비용지급 등 계약에
        대한 책임을 부담합니다. 이를 지키지 않고 계약을 체결하여 발생한 손실,
        손해에 대한 책임은 회원 본인이 부담하여야 합니다.
      </p>
      <p className={styles.Desc}>
        ② 회원은 본 약관 및 회사가 LawLine과 관련하여 고지하는 내용을 준수하여야
        하며, 약관 및 고지 내용을 위반하거나 이행하지 아니하여 발생하는 모든
        손실, 손해에 대하여 책임을 부담합니다.
      </p>
      <p className={styles.Desc}>
        ③ 청약 또는 청약의 유인과 관련하여 회원이 입력한 정보 및 그 정보와
        관련하여 발생한 책임과 불이익은 전적으로 회원이 부담하여야 합니다.
      </p>
      <p className={styles.Desc}>
        ④ 회원은 LawLine을 통해 연결된 LawLine 회원에게 약정한 비용을 직접
        지불하여야 합니다.
      </p>
      <p className={styles.Desc}>
        ⑤ 회원은 회사가 서비스를 안전하게 제공할 수 있도록 회사에 협조하여야
        하며, 회사가 회원의 본 약관 위반행위를 발견하여 회원에게 해당 위반행위에
        대하여 소명을 요청할 경우 회원은 회사의 요청에 적극 응하여야 합니다.
      </p>
      <p className={styles.Desc}>
        ⑥ 회원은 분쟁이 발생한 경우 분쟁의 해결을 위하여 성실히 임하여야 합니다.
      </p>
      <h3 className={styles.SubTitle}>제22조 (회원의 금지행위)</h3>
      <p className={styles.Desc}>
        회사는 서비스의 신뢰성을 제고하고 안전한 거래가 이뤄질 수 있도록
        회원에게 아래와 같은 행위를 금지합니다.
      </p>
      <p className={styles.Desc}>
        1{")"} 회사가 제공하는 LawLine 이용방법에 의하지 아니하고 비정상적인
        방법으로 LawLine을 이용하거나 시스템에 접근하는 행위
      </p>
      <p className={styles.Desc}>
        2{")"} 타인의 명의 등을 도용하여 회사가 제공하는 LawLine을 이용하는 행위
      </p>
      <p className={styles.Desc}>
        3{")"} 법률상담 등 계약 체결 의사 없이 청약을 하는 행위
      </p>
      <p className={styles.Desc}>
        4{")"} LawLine 계정을 타인에게 대여하거나 판매, 양도 등을 하는 행위
      </p>
      <p className={styles.Desc}>
        5{")"} 타인의 명의도용, 부정거래 등 관련법령, 개별약관, 본 약관 및
        이용정책 등을 위반하여 LawLine에서 회원 자격이 정지되는 경우
      </p>
      <p className={styles.Desc}>
        6{")"} 회사가 게시한 정보의 무단 변경 또는 회사가 정한 정보 이외의
        정보(컴퓨터 프로그램 등) 등의 송신 또는 게시하는 행위
      </p>
      <p className={styles.Desc}>
        7{")"} 회사의 동의 없이 제3자와 재판현황 정보를 공유하는 행위
      </p>
      <p className={styles.Desc}>
        8{")"} 회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해행위
      </p>
      <p className={styles.Desc}>
        9{")"} 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
      </p>
      <p className={styles.Desc}>10{")"} 기타 불법적이거나 부당한 행위</p>
      <p className={styles.Desc}>
        회사는 회원이 본 조의 금지행위를 하는 경우 서비스 이용을 제한할 수
        있으며, 이 경우 발생하는 모든 책임은 회원이 부담합니다. 회사는 필요한
        경우 회원의 금지행위 사실을 관련 정부기관 또는 사법기관에 통지할 수
        있습니다.
      </p>

      <h3 className={styles.SubTitle}>제4장 기타</h3>

      <h3 className={styles.SubTitle}>제23조 (책임제한)</h3>
      <p className={styles.Desc}>
        ① 회사가 회원과 LawLine 회원 사이의 법률상담 등 계약을 중개하는 경우,
        회사는 이를 중개하는 시스템을 운영•관리•제공할 뿐이며, 상기 계약 당사자
        중 일방을 대리하지 않습니다. 이 경우, 회원과 LawLine 회원 사이에 성립된
        거래 및 이에 따라 회원 또는 다른 회원이 제공한 정보에 대한 책임은 회원
        및 LawLine 회원이 직접 부담합니다.
      </p>
      <p className={styles.Desc}>
        ② 회원이 자신의 개인정보 및 계정 등을 타인에게 제공하거나, 회원의
        관리소홀로 유출됨으로써 발생하는 피해에 대해서 회사는 책임을 부담하지
        않습니다.
      </p>
      <p className={styles.Desc}>
        ③ 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을
        지지 않습니다.
      </p>
      <p className={styles.Desc}>
        ④ 회사는 회사의 중개에 따라 회원과 LawLine 회원 간 이루어진 거래와
        관련하여 계약체결 의사 또는 수락의사의 존부 및 진정성, 품질, 완전성,
        안전성, 적법성 및 타인의 권리에 대한 비침해성, 회원 또는 다른 회원이
        제공한 정보 및 그 정보의 진실성 또는 적법성 등 일체에 대하여 보증하지
        않으며, 그와 관련하여 어떠한 책임도 부담하지 않습니다.
      </p>
      <p className={styles.Desc}>
        ⑤ 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도,
        정확성 등의 내용에 관하여는 책임을 부담하지 않습니다.
      </p>
      <p className={styles.Desc}>
        ⑥ 회사는 관계법령의 변경, 천재지변, 디도스(DDOS)공격, IDC 장애,
        기간통신사업자의 회선 장애 또는 이에 준하는 불가항력으로 인하여 LawLine를
        제공할 수 없는 경우에는 LawLine 제공에 관한 책임이 면제됩니다.
      </p>
      <p className={styles.Desc}>
        ⑦ 회사는 회원의 LawLine 이용과 직접적으로 관련이 없는 분쟁에 관여하지
        않으며, 회원과 다른 회원 또는 회원과 제 3 자 간의 분쟁을 포함하여 범죄
        및 불법행위 등에 대해서는 회사의 과실이 없는 한 책임을 부담하지
        않습니다.
      </p>
      <p className={styles.Desc}>
        ⑧ 회사는 LawLine이 제공하는 정보에 대하여 어떠한 법률상 책임을 지지 않으며,
        회원은 동 정보가 변호사법 제34조 제5항의 ‘업무’에 해당하지 아니함을
        확인합니다.
      </p>
      <h3 className={styles.SubTitle}>제30조 (준거법 및 재판관할)</h3>
      <p className={styles.Desc}>
        ① 본 약관과 관련된 사항에 대하여는 대한민국법을 준거법으로 합니다.
      </p>
      <p className={styles.Desc}>
        ② 회사와 회원간에 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에
        제소합니다.
      </p>
      <h3 className={styles.SubTitle}>부칙</h3>
      <h3 className={styles.SubTitle}>
        본 약관은 2023년 11월 22일부터 적용됩니다.
      </h3>
    </div>
  );
};

export default Provision;
