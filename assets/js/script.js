let btnToggleInput;
let inputNewTodoItem;
let todoItemList;
let wrapperItemDelete;
let wrapperItemValue;

//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    major();

});

function major() {

    init();

}

function init() {

    todoItemList = $("ul");
    inputNewTodoItem = $("#new-todo-item");
    wrapperItemDelete = $("ul li .item-delete");
    wrapperItemValue = $("ul li .item-value");
    btnToggleInput = $("#btn-toggle-input");

    /*
        Add event listeners using on method with special case of parent-child
        to support future children elements as well
        Applying on() method over parent element for click listener
        followed by the css selector for the child element to which
        this listener will be added & not the parent element
        This way the future child elements will automatically have
        this listener attached by default
     */
    todoItemList.on("click", ".item-value", function () {
        $(this).toggleClass("completed");
    });

    //  Delete Selected Item
    todoItemList.on("click", ".item-delete", function () {
        $(this).parent().fadeToggle(400, function () {
            $(this).remove();
        });
    });

    inputNewTodoItem.on("keydown", function (event) {

        if (event.key === "Enter") {
            //  Save the value of the new item
            let newValue = inputNewTodoItem.val();

            //  Check for White space constraint
            if (newValue === "") return;

            //  Reset value for the input element to empty string
            inputNewTodoItem.val("");

            //  Create new item with the input value i.e. newValue
            let newItem = "<li>" +
                "<span class=\"item-delete\"><i class=\"fa fa-trash-o\"></i></span>" +
                "<span class=\"item-value\">" + newValue + "</span>" +
                "</li>";

            //  Insert new item at the end of the list
            // todoItemList.append(generateNewTodoItem(newValue));
            $(newItem).hide().appendTo("ul").fadeIn(400);

        }

    })

    btnToggleInput.on("click", function () {

        let temp = $(this).find("i");
        let label = $("label");//.previousSibling("label");

        inputNewTodoItem.slideToggle(400);
        label.slideToggle(1);

        if (temp.hasClass("fa-angle-up")) {
            temp.toggleClass("fa-angle-down");
            temp.toggleClass("fa-angle-up");
            return;
        }

        if (temp.hasClass("fa-angle-down")) {
            temp.addClass("fa-angle-up");
            temp.removeClass("fa-angle-down");
        }

    });

}
