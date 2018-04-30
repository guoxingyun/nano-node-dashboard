import React from "react";
import accounting from "accounting";
import AccountLink from "../../AccountLink";
import BlockLink from "../../BlockLink";

export default function SendBlock({ event }) {
  const { block } = event;
  return (
    <div className="row">
      <div className="col">
        <p className="mb-0">
          <AccountLink
            account={block.account}
            className="text-dark break-word"
          />
        </p>
        <p className="mb-0">
          <span className="text-danger">
            sent {accounting.formatNumber(block.amount, 2)} BANANO
          </span>
        </p>
        <p className="mb-0">
          <BlockLink hash={block.hash} className="text-muted break-word" />
        </p>
      </div>
    </div>
  );
}
