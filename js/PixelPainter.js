//ANNAS STUFF
window.onload = function() {

  var pixelPainterGO = pixelPainterThing();

  pixelPainterGO.htmlGenerator();
  pixelPainterGO.mainGridGenerator(15, 15);
  pixelPainterGO.colorSwatchGridGenerator(5, 9);
  pixelPainterGO.eraseIt();
  pixelPainterGO.clearIt();

};




function pixelPainterThing() {

  var colorContainer = document.createElement('div');
  colorContainer.id = 'color_container';

  var header = document.createElement('div');
  header.id = 'header';

  var logo = document.createElement('div');
  logo.id = 'logo';

  var colorHeading = document.createElement('h1');
  colorHeading.innerHTML = 'Pixel Painter';

  var clearButton = document.createElement('button');
  clearButton.id = 'clear_button';
  clearButton.innerHTML = 'Art is hard lets start over';

  var colorSwatch = document.createElement('div');
  colorSwatch.id = 'color_swatch';

  var mainContainer = document.createElement('div');
  mainContainer.id = 'pixel_container';

  var gridOuterBox = document.createElement('div');
  gridOuterBox.id = 'grid_outer_box';

  var gridContainer = document.createElement('div');
  gridContainer.id = 'gridtofill';

  var mainGridArray = document.getElementsByClassName('a_box');

  var eraseButton = document.createElement('button');
  eraseButton.id = 'erase_button';
  eraseButton.innerHTML = 'Erase';

  var colorSelected;
  var colorClassArray = document.getElementsByClassName('color_box');

  var colorArray = ['#000000', '#666666', '#b7b7b7', '#d9d9d9', '#ffffff', '#2d1400', '#622d00', '#7a3901', '#cc5f01', '#d2aa7a', '#5a0000', '#c20000', '#ff0000', '#ff5c4c', '#ffbcbc', '#973902', '#de5403', '#ff9900',  '#ffbd46', '#ffdaac','#919100', '#d8d800', '#ffff00', '#f5ff62', '#fdffa6', '#274902', '#4e9105', '#00ce00', '#00ff00', '#94ff8d', '#006e6e', '#00abab', '#00dede', '#a4fff6', '#e1fff9', '#05086c', '#0d15ff', '#1170ff', '#706dff', '#cac4ff', '#3d055a', '#7a0ab4', '#ae0fff', '#ff81d8', '#ffc6ed'];
  var colorArrayLength = colorArray.length;

  var column = 0;
  var row = 0;
  var colorNumber = 0;



  var htmlGenerator = function() {


    mainContainer.appendChild(colorContainer);
    colorContainer.appendChild(header);
    header.appendChild(logo);
    header.appendChild(colorHeading);
    colorContainer.appendChild(clearButton);
    colorContainer.appendChild(colorSwatch);

    //Grid to fill in
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(gridOuterBox);
    gridOuterBox.appendChild(gridContainer);

    colorContainer.appendChild(eraseButton);

  };


  var mainGridGenerator = function(column, row) {

    for (var i = 1; i <= row; i++) {
      var theRow = document.createElement('div');
      theRow.setAttribute('id', 'row' + i);
      theRow.setAttribute('class', 'row');

      for (var j = 1; j <= column; j++) {
        var gridBox = document.createElement('div');
        gridBox.setAttribute('id', 'box' + j);
        gridBox.setAttribute('class', 'a_box');
        theRow.appendChild(gridBox);
      }
      gridContainer.appendChild(theRow);
    }

    for (var w = 0; w < mainGridArray.length; w++) {
      mainGridArray[w].addEventListener('click', function(event) {
        event.target.style.background = colorSelected;
        console.log(colorSelected);
      }
      );
    }
  };


  var colorSwatchGridGenerator = function(column, row) {
    var count
    for (var i = 1; i <= row; i++) {
      var theRow = document.createElement('div');
      theRow.setAttribute('id', 'colorrow' + i);
      theRow.setAttribute('class', 'row');

      for (var j = 1; j <= column; j++) {
        var colorBox = document.createElement('div');
        colorBox.setAttribute('id', 'colorbox' + j);
        colorBox.style.backgroundColor = colorArray[colorNumber];
        colorNumber++;
        colorBox.setAttribute('class', 'color_box');
        theRow.appendChild(colorBox);
      }
      colorSwatch.appendChild(theRow);
    }

    for (var w = 0; w < colorClassArray.length; w++) {
      colorClassArray[w].addEventListener('click', function(event) {
        colorSelected = event.target.style.backgroundColor;
        console.log(colorSelected);
      });
    }
  };

  var eraseIt = function(){
    document.getElementById('erase_button').addEventListener('click', function () {
      colorSelected = 'transparent';
    });
  };


  var clearIt = function(){
    document.getElementById('clear_button').addEventListener('click', function () {
      for(var i = 0; i < mainGridArray.length; i++) {
        mainGridArray[i].style.backgroundColor = 'transparent';
      }
    });
  };


//build and input box that takes nums and places them here.


  // var gridInputHeading = document.createElement('h2');
  // gridInputHeading.id = 'gridInputHeading';
  // gridInputHeading.innerHTML = 'Generate Grid Size'
  // gridContainer.appendChild(gridInputHeading);

  // var gridInput1 = document.createElement('input');
  // gridInput1.id = 'gridInput1';
  // gridContainer.appendChild(gridInput1);

  // var gridInput2 = document.createElement('input');
  // gridInput2.id = 'gridInput2';
  // gridContainer.appendChild(gridInput2);

  // var gridGeneratorButton = document.createElement('button');
  // gridGeneratorButton.id = 'gridGeneratorButton';
  // gridGeneratorButton.innerHTML = 'Generate Grid'
  // gridContainer.appendChild(gridGeneratorButton);


  return {
    htmlGenerator : htmlGenerator,
    mainGridGenerator : mainGridGenerator,
    colorSwatchGridGenerator : colorSwatchGridGenerator,
    eraseIt : eraseIt,
    clearIt : clearIt
  };

}





// ['#000000', '#666666', '#b7b7b7', '#d9d9d9', '#ffffff', '#2d1400', '#622d00', '#7a3901', '#cc5f01', '#d2aa7a', '#5a0000', '#c20000', '#ff0000', '#ff5c4c', '#ffbcbc', '#973902', '#de5403', '#ff9900',  '#ffbd46', '#ffdaac','#919100', '#d8d800', '#ffff00', '#f5ff62', '#fdffa6', '#274902', '#4e9105', '#00ce00', '#00ff00', '#94ff8d', '#006e6e', '#00abab', '#00dede', '#a4fff6', '#e1fff9', '#05086c', '#0d15ff', '#1170ff', '#706dff', '#cac4ff', '#3d055a', '#7a0ab4', '#ae0fff', '#ff81d8', '#ffc6ed'];