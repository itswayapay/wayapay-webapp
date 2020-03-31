export interface Reviewer {
    name: string;
    slug: string;
    details?: string;
    phone: string;
    sending_amount: number;
    receiving_amount: number;
}

export const Reviewers: Reviewer[] = [
    {
        name: 'MARORIA HEMPSTONE ',
        slug: 'maroria-hempston',
        details: 'Mobile Money account ending with 6246',
        phone: '254722146246',
        sending_amount: 1000,
        receiving_amount: 103710,
    },
    {
        name: 'JOSHUA MUNGAI',
        slug: 'joshua-mwangi',
        details: 'Bank account ending with 3456',
        phone: '2547079234544',
        sending_amount: 5000,
        receiving_amount: 518550,

    },
    {
        name: 'THE KAREN HOSPITAL',
        slug: 'the-karen-hospital',
        details: 'Bank account ending with 8899',
        phone: '254721000777',
        sending_amount: 3500,
        receiving_amount: 362985,
    }
];
