const kpis = [
    {
        label: 'Conversion Rate',
        description: 'Percentage of visitors who make a purchase.',
        inputs: [
            { key: 'convertedVisitors', label: 'Number of Converted Visitors' },
            { key: 'totalVisitors', label: 'Total Number of Visitors' }
        ],
        calculate: ({ convertedVisitors, totalVisitors }) => (convertedVisitors / totalVisitors) * 100,
        unit: '%'
    },
    {
        label: 'Average Order Value (AOV)',
        description: 'Average amount spent per order.',
        inputs: [
            { key: 'totalRevenue', label: 'Total Revenue' },
            { key: 'totalOrders', label: 'Total Number of Orders' }
        ],
        calculate: ({ totalRevenue, totalOrders }) => totalRevenue / totalOrders,
        unit: 'Currency'
    },
    {
        label: 'Cart Abandonment Rate',
        description: 'Percentage of carts that are abandoned before purchase.',
        inputs: [
            { key: 'abandonedCarts', label: 'Number of Abandoned Carts' },
            { key: 'totalCarts', label: 'Total Number of Carts' }
        ],
        calculate: ({ abandonedCarts, totalCarts }) => (abandonedCarts / totalCarts) * 100,
        unit: '%'
    },
    {
        label: 'Bounce Rate',
        description: 'Percentage of visitors who leave the site after viewing only one page.',
        inputs: [
            { key: 'bouncedVisitors', label: 'Number of Bounced Visitors' },
            { key: 'totalVisitors', label: 'Total Number of Visitors' }
        ],
        calculate: ({ bouncedVisitors, totalVisitors }) => (bouncedVisitors / totalVisitors) * 100,
        unit: '%'
    },
    {
        label: 'Customer Lifetime Value (CLV)',
        description: 'Total revenue expected from a customer over their lifetime.',
        inputs: [
            { key: 'averageOrderValue', label: 'Average Order Value' },
            { key: 'purchaseFrequency', label: 'Purchase Frequency' },
            { key: 'averageCustomerLifespan', label: 'Average Customer Lifespan (in years)' }
        ],
        calculate: ({ averageOrderValue, purchaseFrequency, averageCustomerLifespan }) => averageOrderValue * purchaseFrequency * averageCustomerLifespan,
        unit: 'Currency'
    },
    {
        label: 'Revenue per Visitor (RPV)',
        description: 'Average revenue generated per visitor.',
        inputs: [
            { key: 'totalRevenue', label: 'Total Revenue' },
            { key: 'totalVisitors', label: 'Total Number of Visitors' }
        ],
        calculate: ({ totalRevenue, totalVisitors }) => totalRevenue / totalVisitors,
        unit: 'Currency'
    },
    {
        label: 'Traffic Sources',
        description: 'Breakdown of traffic sources (e.g., organic search, paid search, social media).',
        inputs: [
            { key: 'organicSearch', label: 'Organic Search Traffic' },
            { key: 'paidSearch', label: 'Paid Search Traffic' },
            { key: 'socialMedia', label: 'Social Media Traffic' },
            { key: 'directTraffic', label: 'Direct Traffic' },
            { key: 'referralTraffic', label: 'Referral Traffic' }
        ],
        calculate: (inputs) => inputs,
        unit: 'Count'
    },
    {
        label: 'Cost per Acquisition (CPA)',
        description: 'Average cost spent to acquire a new customer.',
        inputs: [
            { key: 'totalCost', label: 'Total Cost' },
            { key: 'newCustomers', label: 'Number of New Customers' }
        ],
        calculate: ({ totalCost, newCustomers }) => totalCost / newCustomers,
        unit: 'Currency'
    },
    {
        label: 'Social Media Engagement',
        description: 'Engagement metrics from social media platforms.',
        inputs: [
            { key: 'likes', label: 'Number of Likes' },
            { key: 'shares', label: 'Number of Shares' },
            { key: 'comments', label: 'Number of Comments' },
            { key: 'followers', label: 'Number of Followers' }
        ],
        calculate: (inputs) => inputs,
        unit: 'Count'
    },
    {
        label: 'Email Open Rate',
        description: 'Percentage of emails opened by recipients.',
        inputs: [
            { key: 'openedEmails', label: 'Number of Opened Emails' },
            { key: 'totalEmailsSent', label: 'Total Number of Emails Sent' }
        ],
        calculate: ({ openedEmails, totalEmailsSent }) => (openedEmails / totalEmailsSent) * 100,
        unit: '%'
    },
    {
        label: 'Email Clickthrough Rate (CTR)',
        description: 'Percentage of email recipients who clicked on a link within the email.',
        inputs: [
            { key: 'clickedLinks', label: 'Number of Clicked Links' },
            { key: 'openedEmails', label: 'Number of Opened Emails' }
        ],
        calculate: ({ clickedLinks, openedEmails }) => (clickedLinks / openedEmails) * 100,
        unit: '%'
    },
    {
        label: 'New vs. Returning Customers',
        description: 'Comparison between new and returning customers.',
        inputs: [
            { key: 'newCustomers', label: 'Number of New Customers' },
            { key: 'returningCustomers', label: 'Number of Returning Customers' }
        ],
        calculate: (inputs) => inputs,
        unit: 'Count'
    },
    {
        label: 'Customer Retention Rate (CRR)',
        description: 'Percentage of customers who return after their first purchase.',
        inputs: [
            { key: 'repeatCustomers', label: 'Number of Repeat Customers' },
            { key: 'totalCustomers', label: 'Total Number of Customers' }
        ],
        calculate: ({ repeatCustomers, totalCustomers }) => (repeatCustomers / totalCustomers) * 100,
        unit: '%'
    },
    {
        label: 'Repeat Purchase Rate (RPR)',
        description: 'Percentage of customers who make more than one purchase.',
        inputs: [
            { key: 'repeatCustomers', label: 'Number of Repeat Customers' },
            { key: 'totalCustomers', label: 'Total Number of Customers' }
        ],
        calculate: ({ repeatCustomers, totalCustomers }) => (repeatCustomers / totalCustomers) * 100,
        unit: '%'
    },
    {
        label: 'Purchase Frequency',
        description: 'Average number of purchases made by a customer.',
        inputs: [
            { key: 'totalPurchases', label: 'Total Number of Purchases' },
            { key: 'totalCustomers', label: 'Total Number of Customers' }
        ],
        calculate: ({ totalPurchases, totalCustomers }) => totalPurchases / totalCustomers,
        unit: 'Count'
    },
    {
        label: 'Churn Rate',
        description: 'Percentage of customers lost over a period.',
        inputs: [
            { key: 'lostCustomers', label: 'Number of Lost Customers' },
            { key: 'totalCustomers', label: 'Total Number of Customers at Start' }
        ],
        calculate: ({ lostCustomers, totalCustomers }) => (lostCustomers / totalCustomers) * 100,
        unit: '%'
    },
    {
        label: 'Time Between Purchases',
        description: 'Average time between purchases by a customer.',
        inputs: [
            { key: 'totalTimeBetweenPurchases', label: 'Total Time Between Purchases (in days)' },
            { key: 'totalPurchases', label: 'Total Number of Purchases' }
        ],
        calculate: ({ totalTimeBetweenPurchases, totalPurchases }) => totalTimeBetweenPurchases / totalPurchases,
        unit: 'Days'
    },
    {
        label: 'Customer Referral Rate',
        description: 'Percentage of customers who refer new customers.',
        inputs: [
            { key: 'referrals', label: 'Number of Referrals' },
            { key: 'totalCustomers', label: 'Total Number of Customers' }
        ],
        calculate: ({ referrals, totalCustomers }) => (referrals / totalCustomers) * 100,
        unit: '%'
    },
    {
        label: 'Site Search Usage',
        description: 'Percentage of visitors who use the site search feature.',
        inputs: [
            { key: 'searchUsers', label: 'Number of Users Who Used Site Search' },
            { key: 'totalVisitors', label: 'Total Number of Visitors' }
        ],
        calculate: ({ searchUsers, totalVisitors }) => (searchUsers / totalVisitors) * 100,
        unit: '%'
    },
    {
        label: 'Search Conversion Rate',
        description: 'Percentage of site search users who complete a purchase.',
        inputs: [
            { key: 'purchasesFromSearch', label: 'Number of Purchases from Site Search' },
            { key: 'searchUsers', label: 'Number of Users Who Used Site Search' }
        ],
        calculate: ({ purchasesFromSearch, searchUsers }) => (purchasesFromSearch / searchUsers) * 100,
        unit: '%'
    },
    {
        label: 'Top Search Queries',
        description: 'Most common search queries used on the site.',
        inputs: [
            { key: 'searchQuery1', label: 'Top Search Query 1' },
            { key: 'searchQuery2', label: 'Top Search Query 2' },
            { key: 'searchQuery3', label: 'Top Search Query 3' }
        ],
        calculate: (inputs) => inputs,
        unit: 'Count'
    },
    {
        label: 'Customer Satisfaction Score (CSAT)',
        description: 'Average satisfaction score given by customers.',
        inputs: [
            { key: 'totalSatisfactionScore', label: 'Total Satisfaction Score' },
            { key: 'numberOfResponses', label: 'Number of Responses' }
        ],
        calculate: ({ totalSatisfactionScore, numberOfResponses }) => totalSatisfactionScore / numberOfResponses,
        unit: 'Score'
    },
    {
        label: 'Net Promoter Score (NPS)',
        description: 'Measure of customer loyalty and likelihood to recommend your business.',
        inputs: [
            { key: 'promoters', label: 'Number of Promoters' },
            { key: 'detractors', label: 'Number of Detractors' },
            { key: 'totalRespondents', label: 'Total Number of Respondents' }
        ],
        calculate: ({ promoters, detractors, totalRespondents }) => ((promoters - detractors) / totalRespondents) * 100,
        unit: '%'
    },
    {
        label: 'Customer Effort Score (CES)',
        description: 'Measure of how easy it is for customers to get their issues resolved.',
        inputs: [
            { key: 'totalEffortScore', label: 'Total Effort Score' },
            { key: 'numberOfResponses', label: 'Number of Responses' }
        ],
        calculate: ({ totalEffortScore, numberOfResponses }) => totalEffortScore / numberOfResponses,
        unit: 'Score'
    },
    {
        label: 'Return Rate',
        description: 'Percentage of items or orders that are returned.',
        inputs: [
            { key: 'returnedItems', label: 'Number of Items Returned' },
            { key: 'totalItemsSold', label: 'Total Number of Items Sold' }
        ],
        calculate: ({ returnedItems, totalItemsSold }) => (returnedItems / totalItemsSold) * 100,
        unit: '%'
    },
    {
        label: 'Time to First Purchase',
        description: 'Average time it takes for a new customer to make their first purchase.',
        inputs: [
            { key: 'totalTimeToFirstPurchase', label: 'Total Time to First Purchase (in days)' },
            { key: 'newCustomers', label: 'Number of New Customers' }
        ],
        calculate: ({ totalTimeToFirstPurchase, newCustomers }) => totalTimeToFirstPurchase / newCustomers,
        unit: 'Days'
    },
    {
        label: 'Customer Loyalty',
        description: 'Measure of a customer\'s likelihood to continue buying from your store.',
        inputs: [
            { key: 'repeatCustomers', label: 'Number of Repeat Customers' },
            { key: 'totalCustomers', label: 'Total Number of Customers' }
        ],
        calculate: ({ repeatCustomers, totalCustomers }) => (repeatCustomers / totalCustomers) * 100,
        unit: '%'
    }
];

window.onload = function () {
    const dropdown = document.getElementById('kpiDropdown');
    kpis.forEach(kpi => {
        const option = document.createElement('option');
        option.value = kpi.label;
        option.textContent = kpi.label;
        dropdown.appendChild(option);
    });
};

function showKPI() {
    const dropdown = document.getElementById('kpiDropdown');
    const kpiContent = document.getElementById('kpiContent');
    const selectedKPI = kpis.find(kpi => kpi.label === dropdown.value);

    if (selectedKPI) {
        kpiContent.innerHTML = `<h2>${selectedKPI.label}</h2>
        <p>* ${selectedKPI.description}</p>`;
        selectedKPI.inputs.forEach(input => {
            kpiContent.innerHTML += `
                <label for="${input.key}">${input.label}</label>
                <input type="number" id="${input.key}" />
            `;
        });
        kpiContent.classList.add('opened');
    } else {
        kpiContent.innerHTML = '';
        kpiContent.classList.remove('opened');
    }
}

function calculateKPI() {
    const dropdown = document.getElementById('kpiDropdown');
    const kpi = kpis.find(kpi => kpi.label === dropdown.value);
    const resultsDiv = document.getElementById('results');

    if (kpi) {
        const inputs = {};
        kpi.inputs.forEach(input => {
            inputs[input.key] = parseFloat(document.getElementById(input.key).value);
        });
        const result = kpi.calculate(inputs);
        resultsDiv.innerHTML = `<h3>Calculated ${kpi.label}:</h3>
        <p>${result.toFixed(2)} ${kpi.unit}</p>`;
    } else {
        resultsDiv.innerHTML = '<p>Please select a KPI and enter all required values.</p>';
    }
}

