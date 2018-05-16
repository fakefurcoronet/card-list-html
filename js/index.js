const defaultDispCnt = 4; // 初期表示件数
const addDispCnt = 4;     // 追加表示件数

(function ($) {
	$(function () {
		setTimeout(function () {
			$('#wrapper').show();
			$('#wrapper').stop().animate({
				opacity: 1
			}, {
				delay: 300,
				duration: 250
			});
		}, 300);

		// もっと見るボタンの表示/非表示設定
		$('.readMoreBtn').each(function () {
			if ($(this).data('program-count') <= $(this).data('current-count')) {
				$(this).hide();
			} else {
				// 一覧のHTMLを配列で取得する
				var tileList = $('#tileList').children();
				$(tileList).each(function (i, elem) {
					// 初期表示件数以外は非表示にする
					if (i >= defaultDispCnt) {
						$(this).hide();
					}
				});
			}
		});
		$('.readMoreBtn').click(function () {
			const currentCount = $(this).data('current-count');
			const newCount = currentCount + addDispCnt;
			const tileList = $(this).prev().children();
			$(tileList).each(function (i, elem) {
				if (currentCount <= i && i < newCount) {
					$(elem).show();
				}
			});
			if ($(this).data('thumb-count') <= newCount) {
				$(this).hide();
			}
			$(this).data('current-count', newCount);

			return false;
		});
	});
}(jQuery));
