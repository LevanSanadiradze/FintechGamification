<?php

//TODO
global $DietData;
$DietData = [
    'Salary' => 5000,
    'Limits' => [
        'კვება' => 1000,
        'გართობა' => 600,
        'ტრანსპორტი' => 500,
        'სურსათი' => 600,
        'გადასახადები და საკომისიოები' => 300,
        'საყიდლები' => 700,
        'ჯანმრთელობა და თავის მოვლა' => 300
    ],
    'MonthStats' => [
        'ნოემბერი' => [300, 500, 825, 545, 100, 150, 75],
        'ოქტომბერი' => [500, 700, 250, 645, 150, 500, 189],
        'სექტემბერი' => [700, 220, 290, 735, 180, 489, 375],
        'აგვისტო' => [800, 470, 257, 550, 256, 458, 275],
        'ივლისი' => [430, 490, 259, 459, 360, 750, 277],
        'ივნისი' => [400, 580, 285, 654, 321, 900, 300],
        'მაისი' => [900, 7500, 525, 457, 299, 950, 266],
        'აპრილი' => [1100, 700, 504, 580, 305, 680, 370],
        'მარტი' => [1000, 400, 325, 545, 270, 590, 288],
        'თებერვალი' => [475, 300, 525, 345, 279, 600, 310],
        'იანვარი' => [399, 210, 490, 604, 289, 699, 200],
        'დეკემბერი' => [377, 900, 285, 845, 390, 588, 150]
    ]
];

function Diet_GetListOfMonths()
{
    global $DietData;
    $months = $DietData['MonthStats'];
    $List = [];

    foreach($months as $m => $w)
    {
        $MonthData = Diet_GetPercentages($w);

        array_push($List, [
            'Month' => $m,
            'AveragePercentage' => $MonthData[1],
            'OverWaste' => $MonthData[2],
            'MonthData' => $MonthData[0]
        ]);
    }

    return $List;
}

function Diet_GetPercentages($Wasted) 
{
    global $DietData;
    $Result = [];

    $AveragePercentage = 0;
    $OverWaste = 0;

    $i = 0;
    foreach($DietData['Limits'] as $C => $L)
    {
        $data = [
            'Category' => $C,
            'Wasted' => $Wasted[$i],
            'Limit' => $L,
            'Percentage' => (($Wasted[$i++] / $L) * 100.0)
        ];

        $AveragePercentage += $data['Percentage'];
        $OverWaste += $data['Wasted'] - $data['Limit'];
        array_push($Result, $data);
    }

    $AveragePercentage /= $i;

    return [$Result, $AveragePercentage, $OverWaste];
}

// function Diet_GetMonthData($month)
// {
//     $monthData = array_keys($DietData['MonthStats'])[$month]
// }

?>