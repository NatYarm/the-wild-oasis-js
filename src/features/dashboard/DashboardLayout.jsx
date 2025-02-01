import styled from 'styled-components';
import Statistics from './Statistics';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isPendingBookings } = useRecentBookings();
  const { stays, confirmedStays, isPendingStays, numDays } = useRecentStays();
  const { cabins, isPendingCabins } = useCabins();

  if (isPendingBookings || isPendingStays || isPendingCabins)
    return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Statistics
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      />
      <div>Todays activity </div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
