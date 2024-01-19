const openItem = item => {
    console.log(item);
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    contentBlock.height(reqHeight);
}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    console.log("g");

    openItem($this);
})