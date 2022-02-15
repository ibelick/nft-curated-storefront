import { castVote } from "lib/snapshot";
import { Proposals } from "types/snapshot";

const Vote: React.FC<{ proposals?: Proposals[] }> = ({ proposals }) => {
  return (
    <div>
      <ul>
        {proposals?.map((proposal: Proposals) => {
          return (
            <li key={proposal.id} className="mb-4">
              <span>{proposal.id}</span>
              {proposal.choices.map((choice, index: number) => {
                return (
                  <div key={`${index}-${choice}`}>
                    {" "}
                    -{" "}
                    <span
                      onClick={() => castVote(proposal.id, index + 1)}
                      className="cursor-pointer"
                    >
                      {choice}
                    </span>
                  </div>
                );
              })}
              <p>
                View on{" "}
                <a
                  href={`https://snapshot.org/#/loopclub.eth/proposal/${proposal.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SnapShot
                </a>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Vote;
