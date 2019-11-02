<?php

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
        'ნოემბერი' => [300, 400, 25, 45, 10, 150, 75],
        'ოქტომბერი' => [300, 400, 25, 45, 10, 150, 75],
        'სექტემბერი' => [300, 400, 25, 45, 10, 150, 75],
        'აგვისტო' => [300, 400, 25, 45, 10, 150, 75],
        'ივლისი' => [300, 400, 25, 45, 10, 150, 75],
        'ივნისი' => [300, 400, 25, 45, 10, 150, 75],
        'მაისი' => [300, 400, 25, 45, 10, 150, 75],
        'აპრილი' => [300, 400, 25, 45, 10, 150, 75],
        'მარტი' => [300, 400, 25, 45, 10, 150, 75],
        'თებერვალი' => [300, 400, 25, 45, 10, 150, 75],
        'იანვარი' => [300, 400, 25, 45, 10, 150, 75],
        'დეკემბერი' => [300, 400, 25, 45, 10, 150, 75]
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