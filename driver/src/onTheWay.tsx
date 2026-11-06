import type { Duty } from './api';
import { useDuties } from './duties';
import { space } from './theme';
import { Button, Notice } from './ui';

// Same window as the server (ON_THE_WAY_MINUTES in web/src/lib/booking.ts): from 90 min before the start, while up to 3 h late.
const BEFORE_MS = 90 * 60_000;
const LATE_MS = 180 * 60_000;

export function canHeadOut(d: Duty) {
  const t = new Date(d.startAt).getTime() - Date.now();
  return d.status === 'SCHEDULED' && d.response !== 'REJECTED' && t < BEFORE_MS && t > -LATE_MS;
}

/** "On my way to pickup": shares the vehicle location before the trip starts, so passengers see the driver coming. */
export function OnMyWay({ duty }: { duty: Duty }) {
  const { headingTo, setHeadingTo, sharing } = useDuties();
  if (!canHeadOut(duty)) return null;
  if (headingTo === duty.id)
    return (
      <Notice
        tone="success"
        icon="radio"
        text={sharing ? 'Passengers can see you are on the way. Tap Start trip when the trip begins.' : 'Turning on location sharing…'}
        style={{ marginBottom: space.sm }}
      />
    );
  return <Button variant="outline" icon="navigate" title="On my way to pickup" onPress={() => setHeadingTo(duty.id)} style={{ marginBottom: space.sm }} />;
}
