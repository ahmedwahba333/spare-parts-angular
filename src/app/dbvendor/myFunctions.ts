declare var $: any;
export class sortLabel {
    public jQueryLogic() {
        $(document).ready(function () {
            $("#priceBtnLabelId").click(function () {
                $("#priceBtnLabelIdToggle").slideToggle();
            });

            $("#yearBtnLabelId").click(function () {
                $("#yearBtnLabelIdToggle").slideToggle();
            });

            $("#AtoZBtnId").click(function () {
                $("#AtoZBtnIdToggle").slideToggle();
            });

            $("#ZtoABtnId").click(function () {
                $("#ZtoABtnIdToggle").slideToggle();
            });

            $("#sortBtnToggle").click(function () {
                $("#sortBtnToggleChild").slideToggle();
            });

            $(".itemNodeClass").click(function () {
                $(".itemNodeClassParent").fadeOut();
            });
        });
    }
}

export class search {
    private searchLabel: any;
    public searchmood(id: any) {
        this.searchLabel = document.getElementById("search");
        this.searchLabel.placeholder = `Search By ${id}`;
        this.searchLabel.focus();
    }
    private mainTable: any;
    public searchKeyUp(myElement: any, value: any) {
        for (let i = 0; i < myElement.length; i++) {
            myElement[i].parentElement.classList.add("dispNone");
            if (
                myElement[i].innerHTML
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase())
            ) {
                myElement[i].parentElement.classList.remove("dispNone");

                myElement[i].style.color = "#30a4bc";
                myElement[i].style.fontWeight = "bold";
            }
        }
        if (value != "") {
            this.mainTable.classList.remove("table-striped");
        } else {
            this.mainTable.classList.add("table-striped");
        }
    }
}
export class sort {
    private lowerToUpper(a: any, b: any) {
        return a - b;
    }
    private upperToLower(a: any, b: any) {
        return b - a;
    }
    private tableBody: any;
    private sortColorFun(myElements: any, myColor: any, myFontWeight: any) {
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].style.color = myColor;
            myElements[i].style.fontWeight = myFontWeight;
        }
    }

    sortPriceFun(myFunSort: any, myElements: any) {
        let priceArr = [];
        for (let i = 0; i < myElements.length; i++) {
            priceArr.push(myElements[i].innerText);
        }
        for (let i = 0; i < myElements.length; i++) {
            for (let x = 0; x < myElements.length; x++) {
                if (priceArr.sort(myFunSort)[i] == myElements[x].innerText) {
                    this.tableBody.appendChild(myElements[x].parentElement);
                }
            }
        }
        this.sortColorFun(myElements, "#30a4bc", "bold");
    }
}