$(document).ready(function () {
    $(".project-card").click(function () {
        $(".project-card").removeClass('project_active');
        $('.project-link').removeClass('project_active');
        const siblingCard = $(this).attr("id").replace('project-card', 'project_list_card');
        $(this).toggleClass('project_active');
        $('.project-item').hide();
        $('.project-brief').hide();
        $('.project_list_card').hide();
        const projectBrief = $(this).attr("id").replace('project-card', 'project-brief');
        $('#'+projectBrief).show();
        $("#"+siblingCard).toggle();
    });
    $('.project-link').click(function(){
        $(".project-link").removeClass('project_active');
        $('.project-brief').hide();
        $('.project-item').hide();
        const projectItem = $(this).attr("id").replace('project_view', 'project_item');
        $(this).toggleClass('project_active');
        const projectBrief = $(this).attr("id").replace('project_view', 'project-brief');
        // $('#'+projectBrief).toggle();
        $("#"+projectItem).toggle();
    });
});