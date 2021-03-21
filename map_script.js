

// stores the device context of the canvas we use to draw the outlines
// initialized in myInit, used in myHover and myLeave
var hdc;

// shorthand func
function byId(e){return document.getElementById(e);}

// takes a string that contains coords eg - "227,307,261,309, 339,354, 328,371, 240,331"
// draws a line from each co-ord pair to the next - assumes starting point needs to be repeated as ending point.
function drawPoly(coOrdStr)
{
    var mCoords = coOrdStr.split(',');
    var i, n;
    n = mCoords.length;

    hdc.beginPath();
    hdc.moveTo(mCoords[0], mCoords[1]);
    for (i=2; i<n; i+=2)
    {
        hdc.lineTo(mCoords[i], mCoords[i+1]);
    }
    hdc.lineTo(mCoords[0], mCoords[1]);
    hdc.strokeStyle = "black";
    hdc.lineWidth = 5;
    hdc.stroke();
}

function drawRect(coOrdStr)
{
    var mCoords = coOrdStr.split(',');
    var top, left, bot, right;
    left = mCoords[0];
    top = mCoords[1];
    right = mCoords[2];
    bot = mCoords[3];
    hdc.strokeRect(left,top,right-left,bot-top); 
}

function myHover(element)
{
    var hoveredElement = element;
    var coordStr = element.getAttribute('coords');
    var areaType = element.getAttribute('shape');

    switch (areaType)
    {
        case 'polygon':
        case 'poly':
            drawPoly(coordStr);
            break;

        case 'rect':
            drawRect(coordStr);
    }
    
}

function myLeave()
{
    var canvas = byId('myCanvas');
    hdc.clearRect(0, 0, canvas.width, canvas.height);
}

function myInit()
{
    // get the target image
    var img = byId('img201293016112');

    var x,y, w,h;

    // get it's position and width+height
    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    // move the canvas, so it's contained by the same parent as the image
    var imgParent = img.parentNode;
    var can = byId('myCanvas');
    imgParent.appendChild(can);

    // place the canvas in front of the image
    can.style.zIndex = 1;

    // position it over the image
    can.style.left = x+'px';
    can.style.top = y+'px';

    // make same size as the image
    can.setAttribute('width', w+'px');
    can.setAttribute('height', h+'px');

    // get it's context
    hdc = can.getContext('2d');

    // set the 'default' values for the colour/width of fill/stroke operations
    hdc.fillStyle = 'red';
    hdc.strokeStyle = 'red';
    hdc.lineWidth = 2;
}
$(document).ready(function(){

    var showTooltip = function(event) {
        $('div.tooltip').remove();
        $('<div class="tooltip"><p>Short description of the element <br> will appear here.</p></div>')
          .appendTo('body');
        changeTooltipPosition(event);
     };

    var changeTooltipPosition = function(event) {
        var tooltipX = event.pageX - 8;
        var tooltipY = event.pageY + 8;
        $('div.tooltip').css({top: tooltipY, left: tooltipX});
    };

    var hideTooltip = function() {
        $('div.tooltip').remove();
    };

    $("#head").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#chest").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#hips").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#legs").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#foot").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#stone").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#lion").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#bear").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#leopard").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#fierce_beast").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#ten_horns").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

    $("#judgment").bind({
        mousemove : changeTooltipPosition,
        mouseenter : showTooltip,
        mouseleave: hideTooltip
    });

$("#").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'This is a hover text.');
}, function() {
    $(this).css('cursor','auto');
});

});