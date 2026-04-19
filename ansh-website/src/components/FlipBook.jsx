import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import { ChevronLeft, ChevronRight, Compass, Camera } from 'lucide-react';

const FlipBook = () => {
    const bookRef = useRef();
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const nextButtonClick = () => {
        bookRef.current.pageFlip().flipNext();
    };

    const prevButtonClick = () => {
        bookRef.current.pageFlip().flipPrev();
    };

    const onPage = (e) => {
        setPage(e.data);
    };

    const onInit = (e) => {
        setTotalPage(e.object.getPageCount());
    };

    return (
        <div className="book-container">
            <button className="nav-btn prev-btn" onClick={prevButtonClick} aria-label="Previous Page">
                <ChevronLeft size={32} />
            </button>

            <HTMLFlipBook
                width={450}
                height={600}
                size="stretch"
                minWidth={315}
                maxWidth={500}
                minHeight={420}
                maxHeight={700}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="flip-book"
                ref={bookRef}
                onFlip={onPage}
                onInit={onInit}
            >
                {/* Page 1: Hardcover Front */}
                <Page className="page-cover" density="hard">
                    <div className="cover-design">
                        <div className="cover-border">
                            <h1 className="cover-title">Chapter<br/>One</h1>
                            <p className="cover-author">Ansh's Journey</p>
                        </div>
                    </div>
                </Page>

                {/* Page 2: Inside Cover Front */}
                <Page className="page-cover-inside" density="hard">
                    {/* Blank or pattern inside cover */}
                </Page>

                {/* Page 3: Title Page */}
                <Page number={1}>
                    <div className="center-content" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className="page-title">The Story So Far</h2>
                        <div className="divider"></div>
                        <p className="page-text italic">"Life is what happens when you're busy making other plans."</p>
                    </div>
                </Page>

                {/* Page 4: About Me */}
                <Page number={2}>
                    <h3 className="section-title">Prologue</h3>
                    <div className="image-wrapper">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Portrait" />
                    </div>
                    <p className="page-text">Welcome to my personal scrapbook. Here, I document the milestones, the quiet days, and the adventures that have shaped who I am today.</p>
                </Page>

                {/* Page 5: Memory 1 Left */}
                <Page number={3}>
                    <div className="memory-header">
                        <span className="memory-date">August 2024</span>
                        <span className="memory-location">The Mountains</span>
                    </div>
                    <div className="image-wrapper crooked">
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mountains" />
                    </div>
                </Page>

                {/* Page 6: Memory 1 Right */}
                <Page number={4}>
                    <div className="center-vertical" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 className="memory-title">Reaching the Summit</h3>
                        <p className="page-text">The air was thin, but the view made every step worth it. It felt like standing on the edge of the world, surrounded by a sea of clouds and jagged peaks.</p>
                        <div className="stamp-decoration">
                            <Compass size={48} strokeWidth={1} />
                        </div>
                    </div>
                </Page>

                {/* Page 7: Memory 2 Left */}
                <Page number={5}>
                     <div className="center-vertical" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 className="memory-title">City Lights</h3>
                        <p className="page-text">A spontaneous night out in the neon glow of the city. We lost track of time wandering through hidden alleys, discovering small cafes, and feeling the vibrant pulse of the streets.</p>
                         <div className="stamp-decoration">
                            <Camera size={48} strokeWidth={1} />
                        </div>
                    </div>
                </Page>

                {/* Page 8: Memory 2 Right */}
                <Page number={6}>
                     <div className="memory-header">
                        <span className="memory-date">October 2025</span>
                        <span className="memory-location">Downtown</span>
                    </div>
                    <div className="image-wrapper crooked-right">
                        <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="City" />
                    </div>
                </Page>

                {/* Page 9: Inside Cover Back */}
                <Page className="page-cover-inside" density="hard">
                </Page>

                {/* Page 10: Hardcover Back */}
                <Page className="page-cover" density="hard">
                    <div className="cover-design">
                         <p className="cover-footer">End of Volume I</p>
                    </div>
                </Page>

            </HTMLFlipBook>

            <button className="nav-btn next-btn" onClick={nextButtonClick} aria-label="Next Page">
                <ChevronRight size={32} />
            </button>
            
            <div className="book-controls" style={{ position: 'absolute', bottom: '-40px', width: '100%' }}>
                <span className="page-info">Page {page + 1} of {totalPage}</span>
            </div>
        </div>
    );
};

export default FlipBook;
