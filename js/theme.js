/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function scroll_to(selector) {
    $('html, body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
} 

