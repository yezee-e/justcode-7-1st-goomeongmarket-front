function BoardTwo() {
  return (
    <div className="boardtwo">
      <div className="boardsecOne">
        <strong>주문 취소 관련</strong>
        <p>
          - [배송준비중] 부터는 취소가 불가하니, 반품으로 진행해주세요. (상품에
          따라 반품이 불가할 수 있습니다.
          <br />
          - 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.
          <br />
          - 비회언은 App 또는 모바일 웹사이트에서 [마이컬리 &gt; 비회원 주문조회
          페이지] 에서 취소가 가능합니다.
          <br />
          - 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.
          <br />- 주문상품의 부분취소는 불가능합니다. 전체 주문 취소 후 다시
          구매해주세요.
        </p>
      </div>

      <div className="boardsecTwo">
        <strong>결제 승인 취소 / 환불 관련</strong>
        <p>
          - 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에
          문의해주세요.
          <br />- 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.
        </p>
      </div>
    </div>
  );
}

export default BoardTwo;
