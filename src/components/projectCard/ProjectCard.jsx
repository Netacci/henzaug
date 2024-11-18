/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

const ProjectCard = ({ image, description, completion, client, value }) => {
  return (
    <Card className='hover:shadow-lg transition-shadow duration-300'>
      <img src={image} alt={description} className='w-full h-48 object-cover' />
      <CardHeader>
        <CardDescription>
          <p className='text-sm font-semibold '>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <div className='flex items-center space-x-4 justify-between'>
          <div>
            <span className='text-sm font-semibold text-orange-500'>Value</span>
            <p className='text-lg font-semibold'>{value}</p>
          </div>
          <div className='text-right'>
            <span className='text-sm font-semibold text-orange-500 '>Date</span>
            <p className='text-lg font-semibold'>{date}</p>
          </div>
        </div> */}
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-sm font-semibold text-orange-500'>Value</span>
          <p className='text-sm w-3/4 text-right '>{value}</p>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-sm font-semibold text-orange-500'>Client</span>
          <p className='text-sm w-3/4 text-right '>{client}</p>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-sm font-semibold text-orange-500'>Status</span>
          <p className='text-sm '>{completion}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
