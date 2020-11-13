// let btnHideInput;
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
    todoItemList.on("click", ".item-delete", function (event) {
        $(this).parent().fadeToggle(500, function () {
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

            //  Insert new item at the end of the list
            // todoItemList.append(generateNewTodoItem(newValue));
            todoItemList.append("" +
                "<li>" +
                "<span class=\"item-delete\">[Delete]</span>" +
                "<span class=\"item-value\">" + newValue + "</span>" +
                "</li>");
        }

        function generateNewTodoItem(value) {

            //  Create new item element using vanilla js
            let newTodoItem = document.createElement("li");
            let itemDelete = document.createElement("span");
            itemDelete.classList.add("item-delete");
            itemDelete.textContent = "[Delete]";

            let itemValue = document.createElement("span");
            itemValue.classList.add("item-value");
            itemValue.textContent = value;

            newTodoItem.appendChild(itemDelete);
            newTodoItem.appendChild(itemValue);

            return newTodoItem;
        }

    })

}
