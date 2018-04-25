// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () {

const grid = $('#pixel_canvas');

function makeGrid() {

let colorPicker = $('#colorPicker');
const row = $('#input_height').val();
const column = $('#input_width').val();

// clear canvas
grid.children().remove();

//Check width value entered does not exceed max value
    if (row > 75 || column > 75) {
    alert('Please enter values less than 75!');
    e.preventDefault();
    makeGrid();
 }

//create table
for (let n = 0; n < row; n++) {
  grid.append("<tr></tr>");
    for (let m = 0; m < column; m++) {
      grid.find('tr').last().append("<td></td>");
    }
  }
}

//event listener to prevent default browser refresh
$('#submitButton').click(function(e){
    e.preventDefault();
    makeGrid();
  });

//makes cell chosen color
grid.on('click', 'td' ,function(){
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
  });

//if cell double clicked, colour clears
grid.on('dblclick', 'td' ,function(){
    $(this).removeClass().css('background-color', '');
  });

//click and drag functions to colour many cells
grid.mousedown(function(){
    let color = $('#colorPicker').val();
    $('td').on('mouseover',function(){
      event.preventDefault();
      $(this).css('background-color',color);
    });
  })
    .mouseup(function(){
      event.preventDefault();
      $('td').off('mouseover');
});


//if start again button clicked, canvas removed
$('#refreshButton').click(function(e) {
    $('tr').remove();
});

//if empty grid button clicked, all colours cleared from grid
$('#clearCanvas').click(function(e) {
    $('td').removeAttr('style');
});

//toggle grid lines on and off
$('#toggleLines').click(function(e) {
    $('table, tr, td').toggleClass('toggle');
});

});
