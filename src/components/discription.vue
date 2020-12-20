<template>
    <div class="main__discr">
        <h2 class="main__title">Referal Program</h2>
        <p class="main__txt">Lets build our community together. Ask your friends and colleagues to sign up with your referral link, and get badges to help you stand out from the rest!</p>
    </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

$main-color: #212537;
$main-font: 'Roboto', sans-serif;

.main__discr{
    box-sizing: border-box;
    color: $main-color;
    margin-bottom: 38px;
    .main__title{
        font-family: $main-font;
        font-size: 24px;
    }
    .main__txt{
        font-family: 'Montserrat', sans-serif;
        margin-top: 35px;
        font-size: 14px;
    }
}
@media only screen and (min-width: 768px) {
        
       .main__discr{
           margin-bottom: 16px;
           box-sizing: border-box;
           color: $main-color;
           .main__title{
               font-size: 20px;
               margin: 0;
           }
           .main__txt{
                font-family: 'Montserrat', sans-serif;
                margin-top: 16px;
                font-size: 14px;
            }
       } 
    }
</style>