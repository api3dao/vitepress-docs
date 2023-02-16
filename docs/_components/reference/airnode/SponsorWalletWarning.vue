<!--
This is a POST pre-alpha component. Notice the use of 
"sponsor" and not "requester" related to the designated wallet.

Use only in version >= v0.2

WARNING: Do not place HTML comment lines inside paragraph elements.
-->

<template>
  <div class="custom-block warning">
    <p class="custom-block-title">Designated Sponsor Wallets</p>
    <p>
      Sponsors should not fund a <code>sponsorWallet</code> with more than they
      can trust the Airnode with, as the Airnode controls the private key to the
      <code>sponsorWallet</code>. The deployer of such Airnode undertakes no
      custody obligations, and the risk of loss or misuse of any excess funds
      sent to the <code>sponsorWallet</code> remains with the sponsor.
    </p>
  </div>
</template>
