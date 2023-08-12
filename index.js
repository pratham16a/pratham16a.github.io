$(".expand-button-1").click(()=>{
    $(".expand-section-1").fadeToggle();
    if ($(".college-heading").hasClass("change-color-azure-blue")){
        
        $(".college-heading").removeClass("change-color-azure-blue");
    } else {
        $(".college-heading").addClass("change-color-azure-blue");
        
    }

    if($("#college-button").hasClass("fa-caret-down")){
        $("#college-button").removeClass("fa-caret-down");
        $("#college-button").addClass("fa-caret-up");
    } else {
        $("#college-button").removeClass("fa-caret-up");
        $("#college-button").addClass("fa-caret-down");
    }
});

$(".expand-button-2").click(()=>{
    $(".expand-section-2").fadeToggle();
    if ($(".school-heading").hasClass("change-color-azure-blue")){
        
        $(".school-heading").removeClass("change-color-azure-blue");
    } else {
        $(".school-heading").addClass("change-color-azure-blue");
        
    }
    if($("#school-button").hasClass("fa-caret-down")){
        $("#school-button").removeClass("fa-caret-down");
        $("#school-button").addClass("fa-caret-up");
    } else {
        $("#school-button").removeClass("fa-caret-up");
        $("#school-button").addClass("fa-caret-down");
    }
});