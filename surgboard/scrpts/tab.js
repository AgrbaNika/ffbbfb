const findBlockAlias = (alias) => {
   return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    })
}

$(".interective-avatar__link").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");

    itemToShow.addClass("reviews__item-active").siblings().removeClass("reviews__item-active");
    curItem.addClass("interective__avatar--active").siblings().removeClass("interective__avatar--active");
});