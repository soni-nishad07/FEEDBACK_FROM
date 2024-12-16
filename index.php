<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Satisfaction Survey form Wizard by Ansonika.">
    <meta name="author" content="Ansonika">
    <title>Feedback</title>

    <!-- Favicons-->
    <link rel="icon" type="image/png" href="admin/assets/img/favicon.png">
    <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114"
        href="img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144"
        href="img/apple-touch-icon-144x144-precomposed.png">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Caveat|Poppins:300,400,500,600,700&display=swap"
        rel="stylesheet">
    <script data-require="angular.js@1.4.8" data-semver="1.4.8" src="https://code.angularjs.org/1.4.8/angular.js">
    </script>

    <!-- BASE CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/vendors.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="css/custom.css" rel="stylesheet">
    <script src="js-preview/btn.js"></script>
</head>

<body class="style_2" ng-controller="countryCtrl">

    <div id="preloader">
        <div data-loader="circle-side"></div>
    </div>
    <!-- /Preload -->

    <div id="loader_form">
        <div data-loader="circle-side-2"></div>
    </div>
    <!-- /loader_form -->

    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-5">
                    <a href="index.php"><img src="img/genx-white.webp" alt="" height="40"></a>
                </div>
                <div class="col-7">
                    <div id="social">
                        <ul>
                            <li><a href="https://www.facebook.com/GenXWebHosting/"><i class="social_facebook"></i></a>
                            </li>

                            <li><a href="https://www.instagram.com/genxwebhosting/"><i class="social_instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/company/genxwebhosting"><i
                                        class="social_linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /row -->
        </div>
        <!-- /container -->
    </header>
    <!-- /header -->


    <div class="wrapper_centering divs">
        <div class="container_centering">
            <div class="container">
                <div class="step">
                    <div class="row justify-content-between">

                        <div class="col-sm-3"></div>
                        <div class="col-xl-6 col-lg-6 d-flex align-items-center">
                            <div class="main_title_1">
                                <h3><img src="img/main_icon_1.svg" width="80" height="80" alt="">Feedback</h3>
                                <p style="text-align:justify;">At Gen X Web Hosting, we are committed to providing you
                                    with the best web hosting experience. Your feedback is invaluable in helping us
                                    enhance our services and meet your needs more effectively.
                                </p>
                                <p style="text-align:justify;"> Kindly take a few moments to share your thoughts through
                                    the following feedback questions. Your input will guide us in refining our features,
                                    improving customer support, and ensuring your satisfaction with our hosting
                                    solutions.
                                </p>


                                <p><em>
                                        Thank you for being a part of the Gen X family! Your feedback
                                        makes a difference.</em></p>
                                <button type="button" name="forward" id="next" class="next1">Next</button>
                            </div>
                        </div>
                        <div class="col-sm-3"></div>
                    </div>
                </div>


                <div class="row justify-content-between step">

                    <!-- /col -->
                    <div class="col-sm-3"></div>
                    <div class="col-xl-6 col-lg-5">
                        <div id="wizard_container">
                            <div id="top-wizard">
                                <div id="progressbar"></div>
                            </div>
                            <!-- /top-wizard -->
                            <form id="wrapped" method="POST" autocomplete="off" action="code.php">
                                <input id="website" name="website" type="text" value="">
                                <!-- Leave for security protection, read docs for details -->
                                <div id="middle-wizard">
                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>1 of 15</strong>Please fill with your
                                            details
                                            ?</h3>
                                        <div class="form-group">
                                            <label for="firstname">First Name</label>
                                            <input type="text" name="firstname" id="firstname"
                                                class="form-control required">
                                        </div>
                                        <div class="form-group">
                                            <label for="lastname">Last Name</label>
                                            <input type="text" name="lastname" id="lastname"
                                                class="form-control required">
                                        </div>
                                        <div class="form-group">

                                            <label for="email">Your Email</label>
                                            <input type="email" name="email" id="email" class="form-control required"
                                                onInput="checkUsername()">
                                            <span id="check-username"></span>

                                        </div>
                                    </div>

                                    <div class="step">
                                        <h3 class="main_question"><strong>2 of 15</strong>How did you hear about us?
                                        </h3>
                                        <div class="review_block">
                                            <div class="form-group">
                                                <label for="country">Your Country</label>
                                                <select name="country" class="form-control required"
                                                    ng-model="selectedCountry"
                                                    ng-options="country.name for country in countriesWithPhoneCode">
                                                    <option value="">Select Country</option>
                                                </select>
                                                <input type="hidden" name="country1" ng-value="selectedCountry.name">


                                            </div>

                                            <div class="form-group">
                                                <label for="state">Your State</label>

                                                <select name="state" class="form-control required"
                                                    ng-model="selectedState"
                                                    ng-options="state.name  for state in selectedCountry.states">
                                                    <option value="">Select State</option>
                                                </select>
                                                <input type="hidden" name="state1" ng-value="selectedState.name">


                                            </div>
                                            <div class="form-group">
                                                <label for="city">Your City</label>
                                                <input type="text" name="city" id="city" class="form-control required">
                                            </div>


                                            <div class="form-group">
                                                <input type="text" name="phonecode" ng-model="selectedCountryDialCode"
                                                    ng-value="selectedCountry.dial_code" class=" mobilecode">
                                                <label for="city">Phone number</label>
                                                <input type="number" name="phonenumber" id="Phone number"
                                                    class="form-control required phone">
                                            </div>





                                        </div>
                                    </div>


                                    <!-- /step 1-->


                                    <!-- /step 2-->
                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>3 of 15</strong> How would you rate your
                                            overall experience with Gen X Web Hosting?</h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very satisfied6" name="question_2"
                                                            class="required" value="Very satisfied"
                                                            onchange="getVals(this, 'question_2');">
                                                        <label class="radio" for="Very satisfied6"></label>
                                                        <label for="Very satisfied6" class="wrapper wrapper1"> Very
                                                            satisfied
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Satisfied6" name="question_2"
                                                            class="required" value="Satisfied"
                                                            onchange="getVals(this, 'question_2');">
                                                        <label class="radio" for="Satisfied6"></label>
                                                        <label for="Satisfied6"
                                                            class="wrapper wrapper2">Satisfied</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral" name="question_2"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_2');">
                                                        <label class="radio" for="Neutral"></label>
                                                        <label for="Neutral" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Dissatisfied" name="question_2"
                                                            class="required" value="Dissatisfied"
                                                            onchange="getVals(this, 'question_2');">
                                                        <label class="radio" for="Dissatisfied"></label>
                                                        <label for="Dissatisfied"
                                                            class="wrapper wrapper4">Dissatisfied</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very dissatisfied" name="question_2"
                                                            class="required" value="Very dissatisfied"
                                                            onchange="getVals(this, 'question_2');">
                                                        <label class="radio" for="Very dissatisfied"></label>
                                                        <label for="Very dissatisfied" class="wrapper wrapper5">Very
                                                            dissatisfied</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>4 of 15</strong> On a scale of 0 to 10,
                                            how likely are you to recommend Gen X Web Hosting to a friend or colleague?
                                        </h3>
                                        <div class="switch">
                                            <input name="switch" id="one" type="radio" value="1" checked />
                                            <label for="one" class="switch__label">1</label>
                                            <input name="switch" id="two" type="radio" value="2" />
                                            <label for="two" class="switch__label">2</label>
                                            <input name="switch" id="three" type="radio" value="3" />
                                            <label for="three" class="switch__label">3</label>
                                            <input name="switch" id="four" type="radio" value="4" />
                                            <label for="four" class="switch__label">4</label>
                                            <input name="switch" id="five" type="radio" value="5" />
                                            <label for="five" class="switch__label">5</label>
                                            <input name="switch" id="six" type="radio" value="6" />
                                            <label for="six" class="switch__label">6</label>
                                            <input name="switch" id="seven" type="radio" value="7" />
                                            <label for="seven" class="switch__label">7</label>
                                            <input name="switch" id="eight" type="radio" value="8" />
                                            <label for="eight" class="switch__label">8</label>
                                            <input name="switch" id="nine" type="radio" value="9" />
                                            <label for="nine" class="switch__label">9</label>
                                            <input name="switch" id="ten" type="radio" value="10" />
                                            <label for="ten" class="switch__label">10</label>
                                            <div class="switch__indicator"></div>
                                        </div>
                                        <!-- /review_block-->

                                    </div>





                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>5 of 15</strong> How would you rate the
                                            ease of use of our web hosting services?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very easy" name="question_3"
                                                            class="required" value=" Very easy"
                                                            onchange="getVals(this, 'question_3');">
                                                        <label class="radio" for="Very easy"></label>
                                                        <label for=" Very easy" class="wrapper wrapper1"> Very easy
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Easy" name="question_3" class="required"
                                                            value="Easy" onchange="getVals(this, 'question_3');">
                                                        <label class="radio" for="Easy"></label>
                                                        <label for="Easy" class="wrapper wrapper2"> Easy</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral7" name="question_3"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_3');">
                                                        <label class="radio" for="Neutral7"></label>
                                                        <label for="Neutral7" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Difficult" name="question_3"
                                                            class="required" value="Difficult"
                                                            onchange="getVals(this, 'question_3');">
                                                        <label class="radio" for="Difficult"></label>
                                                        <label for="Difficult" class="wrapper wrapper4">Difficult
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Difficult" name="question_3"
                                                            class="required" value="Very Difficult"
                                                            onchange="getVals(this, 'question_3');">
                                                        <label class="radio" for="Very Difficult"></label>
                                                        <label for="Very Difficult" class="wrapper wrapper5">Very
                                                            Difficult
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>6 of 15</strong> How satisfied are you
                                            with the performance and speed of your website hosted with us?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Extremely satisfied" name="question_4"
                                                            class="required" value="Extremely satisfied"
                                                            onchange="getVals(this, 'question_4');">
                                                        <label class="radio" for="Extremely satisfied"></label>
                                                        <label for="Extremely satisfied"
                                                            class="wrapper wrapper1">Extremely satisfied
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Satisfied4" name="question_4"
                                                            class="required" value="Satisfied"
                                                            onchange="getVals(this, 'question_4');">
                                                        <label class="radio" for="Satisfied4"></label>
                                                        <label for="Satisfied4"
                                                            class="wrapper wrapper2">Satisfied</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral10" name="question_4"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_4');">
                                                        <label class="radio" for="Neutral10"></label>
                                                        <label for="Neutral10" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Dissatisfied1" name="question_4"
                                                            class="required" value="Dissatisfied"
                                                            onchange="getVals(this, 'question_4');">
                                                        <label class="radio" for="Dissatisfied1"></label>
                                                        <label for="Dissatisfied1" class="wrapper wrapper4">Dissatisfied
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Dissatisfied1" name="question_4"
                                                            class="required" value="Very Dissatisfied"
                                                            onchange="getVals(this, 'question_4');">
                                                        <label class="radio" for="Very Dissatisfied1"></label>
                                                        <label for="Very Dissatisfied1" class="wrapper wrapper5">Very
                                                            Dissatisfied
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>


                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>7 of 15</strong>
                                            How would you rate the responsiveness and helpfulness of our customer
                                            support team?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Excellent" name="question_5"
                                                            class="required" value="Excellent"
                                                            onchange="getVals(this, 'question_5');">
                                                        <label class="radio" for="Excellent"></label>
                                                        <label for="Excellent" class="wrapper wrapper1">Excellent
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Good" name="question_5" class="required"
                                                            value="Good" onchange="getVals(this, 'question_5');">
                                                        <label class="radio" for="Good"></label>
                                                        <label for="Good" class="wrapper wrapper2">Good</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Average" name="question_5"
                                                            class="required" value="Average"
                                                            onchange="getVals(this, 'question_5');">
                                                        <label class="radio" for="Average"></label>
                                                        <label for="Average" class="wrapper wrapper3">Average</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Poor" name="question_5" class="required"
                                                            value="Poor" onchange="getVals(this, 'question_5');">
                                                        <label class="radio" for="Poor"></label>
                                                        <label for="Poor" class="wrapper wrapper4">Poor
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Poor" name="question_5"
                                                            class="required" value="Very Poor"
                                                            onchange="getVals(this, 'question_5');">
                                                        <label class="radio" for="Very Poor"></label>
                                                        <label for="Very Poor" class="wrapper wrapper5">Very
                                                            Poor
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>8 of 15</strong> Are there specific
                                            features or functionalities you would like to see added or improved?

                                        </h3>
                                        <div class="form-group">
                                            <label for="additional_message_label">Your Answer</label>
                                            <textarea name="additional_message2" id="additional_message_label"
                                                class="form-control required" style="height:180px;"
                                                onkeyup="getVals(this, 'additional_message');"></textarea>
                                        </div>
                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>9 of 15</strong>
                                            How reliable do you find our web hosting services in terms of uptime and
                                            performance?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very reliable" name="question_6"
                                                            class="required" value="Very reliable"
                                                            onchange="getVals(this, 'question_6');">
                                                        <label class="radio" for="Very reliable"></label>
                                                        <label for="Very reliable" class="wrapper wrapper1">Very
                                                            reliable
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Reliable" name="question_6"
                                                            class="required" value="Reliable"
                                                            onchange="getVals(this, 'question_6');">
                                                        <label class="radio" for="Reliable"></label>
                                                        <label for="Reliable" class="wrapper wrapper2">Reliable</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral2" name="question_6"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_6');">
                                                        <label class="radio" for="Neutral2"></label>
                                                        <label for="Neutral2" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Unreliable" name="question_6"
                                                            class="required" value="Unreliable"
                                                            onchange="getVals(this, 'question_6');">
                                                        <label class="radio" for="Unreliable"></label>
                                                        <label for="Unreliable" class="wrapper wrapper4">Unreliable
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Unreliable" name="question_6"
                                                            class="required" value="Very Unreliable"
                                                            onchange="getVals(this, 'question_6');">
                                                        <label class="radio" for="Very Unreliable"></label>
                                                        <label for="Very Unreliable" class="wrapper wrapper5">Very
                                                            Unreliable
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>10 of 15</strong>
                                            Do you feel that you are getting good value for the price you pay for our
                                            web hosting services?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Excellent value" name="question_7"
                                                            class="required" value="Excellent value"
                                                            onchange="getVals(this, 'question_7');">
                                                        <label class="radio" for="Excellent value"></label>
                                                        <label for="Excellent value" class="wrapper wrapper1">Excellent
                                                            value
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Good value" name="question_7"
                                                            class="required" value="Good value"
                                                            onchange="getVals(this, 'question_7');">
                                                        <label class="radio" for="Good value"></label>
                                                        <label for="Good value" class="wrapper wrapper2">Good
                                                            value</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral3" name="question_7"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_7');">
                                                        <label class="radio" for="Neutral3"></label>
                                                        <label for="Neutral3" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Poor value" name="question_7"
                                                            class="required" value="Poor value"
                                                            onchange="getVals(this, 'question_7');">
                                                        <label class="radio" for="Poor value"></label>
                                                        <label for="Poor value" class="wrapper wrapper4">Poor value
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Poor value" name="question_7"
                                                            class="required" value="Very Poor value"
                                                            onchange="getVals(this, 'question_7');">
                                                        <label class="radio" for="Very Poor value"></label>
                                                        <label for="Very Poor value" class="wrapper wrapper5">Very
                                                            Poor value
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>11 of 15</strong>
                                            Please share any additional comments or suggestions you may have regarding
                                            our services.


                                        </h3>
                                        <div class="form-group">
                                            <label for="additional_message_label">Your Answer</label>
                                            <textarea name="additional_message3" id="additional_message_label"
                                                class="form-control required" style="height:180px;"
                                                onkeyup="getVals(this, 'additional_message');"></textarea>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>12 of 15</strong>
                                            Are there specific areas where you believe we can improve our services?



                                        </h3>
                                        <div class="form-group">
                                            <label for="additional_message_label">Your Answer</label>
                                            <textarea name="additional_message4" id="additional_message_label"
                                                class="form-control required" style="height:180px;"
                                                onkeyup="getVals(this, 'additional_message');"></textarea>
                                        </div>
                                    </div>

                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>13 of 15</strong> What is your favorite
                                            feature or aspect of Gen X Web Hosting?
                                        </h3>
                                        <div class="form-group">
                                            <label for="additional_message_label">Your Answer</label>
                                            <textarea name="additional_message5" id="additional_message_label"
                                                class="form-control required" style="height:180px;"
                                                onkeyup="getVals(this, 'additional_message');"></textarea>
                                        </div>
                                    </div>



                                    <div class="step">
                                        <h3 class="main_question mb-4"><strong>14 of 15</strong>
                                            How satisfied are you with the communication from Gen X Web Hosting
                                            regarding updates, maintenance, and new features?
                                        </h3>
                                        <div class="review_block">
                                            <ul>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very satisfied1" name="question_8"
                                                            class="required" value="Very satisfied"
                                                            onchange="getVals(this, 'question_8');">
                                                        <label class="radio" for="Very satisfied1"></label>
                                                        <label for="Very satisfied1" class="wrapper wrapper1">Very
                                                            satisfied
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Satisfied2" name="question_8"
                                                            class="required" value="Satisfied"
                                                            onchange="getVals(this, 'question_8');">
                                                        <label class="radio" for="Satisfied2"></label>
                                                        <label for="Satisfied2"
                                                            class="wrapper wrapper2">Satisfied</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Neutral4" name="question_8"
                                                            class="required" value="Neutral"
                                                            onchange="getVals(this, 'question_8');">
                                                        <label class="radio" for="Neutral4"></label>
                                                        <label for="Neutral4" class="wrapper wrapper3">Neutral</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Dissatisfied2" name="question_8"
                                                            class="required" value="Dissatisfied"
                                                            onchange="getVals(this, 'question_8');">
                                                        <label class="radio" for="Dissatisfied2"></label>
                                                        <label for="Dissatisfied2" class="wrapper wrapper4">Dissatisfied
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="checkbox_radio_container">
                                                        <input type="radio" id="Very Dissatisfied2" name="question_8"
                                                            class="required" value="Very Dissatisfied"
                                                            onchange="getVals(this, 'question_8');">
                                                        <label class="radio" for="Very Dissatisfied2"></label>
                                                        <label for="Very Dissatisfied" class="wrapper wrapper5">Very
                                                            Dissatisfied
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /review_block-->

                                    </div>

                                    <div class="submit step">
                                        <h3 class="main_question"><strong>15 of 15</strong>How was the service provided?
                                        </h3>
                                        <div class="review_block_smiles">
                                            <ul class="clearfix">
                                                <li>
                                                    <div class="container_smile">
                                                        <input type="radio" id="very_bad_1" name="question_1"
                                                            class="required" value="1"
                                                            onchange="getVals(this, 'question_1');">
                                                        <label class="radio smile_1" for="very_bad_1"><span>Very
                                                                bad</span></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="container_smile">
                                                        <input type="radio" id="bad_1" name="question_1"
                                                            class="required" value="2"
                                                            onchange="getVals(this, 'question_1');">
                                                        <label class="radio smile_2"
                                                            for="bad_1"><span>Bad</span></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="container_smile">
                                                        <input type="radio" id="average_1" name="question_1"
                                                            class="required" value="3"
                                                            onchange="getVals(this, 'question_1');">
                                                        <label class="radio smile_3"
                                                            for="average_1"><span>Average</span></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="container_smile">
                                                        <input type="radio" id="good_1" name="question_1"
                                                            class="required" value="4"
                                                            onchange="getVals(this, 'question_1');">
                                                        <label class="radio smile_4"
                                                            for="good_1"><span>Good</span></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="container_smile">
                                                        <input type="radio" id="very_good_1" name="question_1"
                                                            class="required" value="5"
                                                            onchange="getVals(this, 'question_1');">
                                                        <label class="radio smile_5" for="very_good_1"><span>Very
                                                                Good</span></label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="row justify-content-between add_bottom_25">
                                                <div class="col-4">
                                                    <em>Very Bad</em>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <em>Excellent</em>
                                                </div>
                                            </div>
                                        </div>

                                    </div>





                                    <!-- /step 3-->



                                </div>
                                <!-- /middle-wizard -->

                                <div id="bottom-wizard">
                                    <button type="button" name="backward" class="backward">Prev</button>
                                    <button type="button" name="forward" class="forward">Next</button>

                                    <button type="submit" name="process" class="submit" onclick="submit()">
                                        submit
                                    </button>

                                    <script>
                                    function submit() {
                                        let form = document.getElementById("form");
                                        form.submit();
                                        alert("Data stored in database!");
                                    }
                                    </script>

                                </div>
                                <!-- /bottom-wizard -->

                            </form>
                        </div>
                        <!-- /Wizard container -->
                    </div>
                    <!-- /col -->
                    <div class="col-sm-3"></div>
                </div>
            </div>
            <!-- /row -->
        </div>
        <!-- /container_centering -->
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 py-2 text-center">

                        © Copyright <script type="text/javascript">
                        document.write(new Date().getFullYear());
                        </script> Gen X Web Hosting
                    </div>
                    <!-- <div class="col-md-9">
                        <ul class="clearfix">
                            <li><a href="https://1.envato.market/0oe9P" class="animated_link" target="_parent">Purchase
                                    this template</a></li>
                            <li><a href="index.html" class="animated_link">Demo 1</a></li>
                            <li><a href="index-2.html" class="animated_link">Demo 2</a></li>
                            <li><a href="index-3.html" class="animated_link">Demo 3</a></li>
                        </ul>
                    </div> -->
                </div>
                <!-- /row -->
            </div>
            <!-- /container-fluid -->
        </footer>
        <!-- /footer -->
    </div>
    <!-- /wrapper_centering -->


    <!-- /.modal -->

    <!-- COMMON SCRIPTS -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/common_scripts.min.js"></script>
    <script src="js/functions.js"></script>
    <script src="js/country.js"></script>


    <script src="js/validation.js"></script>

    <!-- Wizard script -->
    <script src="js/survey_func.js"></script>



</body>

</html>