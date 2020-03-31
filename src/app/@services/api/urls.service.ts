import { environment } from 'src/environments/environment';

const baseurl = environment.baseUrlStage;
const base = environment.baseStage;

export class Urls {
  
    authUrl = {
        'verify' : baseurl + 'auth/verify',
        'confirm' : baseurl + 'auth/confirm',
        'register' : baseurl + 'auth/register',
    };

    userUrls = {
        'details' : baseurl + 'user/details',
        'update_profile' : baseurl + 'user/update',
        'invite_friends': baseurl + 'user/invite',
        'flags' : baseurl + 'user/flags',
        'allcards': baseurl + 'user/cards/all',
        'addcard' : baseurl + 'user/cards/add',
        'deposit' : baseurl + 'user/payments/deposit',
        'withdraw' : baseurl + 'user/payments/withdraw',
        'transfer' : baseurl + 'user/payments/transfer',
        'dispute' : baseurl + 'user/payments/dispute',
        'cancel' : baseurl + 'user/payments/cancel',
        'request' : baseurl + 'user/payments/request',
    };

    oauthUrls = {
        'token' : base + 'oauth/token',
        //add more here
    }

    getRegistrationUrl() {
        return this.authUrl.register;
    }

    getVerifyUrl() {
        return this.authUrl.verify;
    }

    getConfirmation() {
        return this.authUrl.confirm;
    }

    getDepositUrl() {
        return this.userUrls.deposit;
    }

    getWithdrawalUrl() {
        return this.userUrls.withdraw;
    }

    getTransferUrl() {
        return this.userUrls.transfer;
    }

    getRequestUrl() {
        return this.userUrls.request;
    }

    getDisputeUrl() {
        return this.userUrls.dispute;
    }

    getCardsUrl() {
        return this.userUrls.allcards;
    }

    getAddCardUrl() {
        return this.userUrls.addcard;
    }

    getOauthUrl() {
        return this.oauthUrls.token;
    }

    getUserUrl() {
        return this.userUrls.details;
    }
    getProfileUpdateUrl(): string {
        return this.userUrls.update_profile;
    }

    getInviteFriendsUrl() : string {
        return this.userUrls.invite_friends;
    }

}